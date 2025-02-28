// 3. pages/apps/[appId].js - Dynamic route for each app
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';
import Spreadsheet from '../../components/Spreadsheet';
import Header from '../../components/Header';

export default function AppPage() {
  const router = useRouter();
  const { appId } = router.query;
  const [app, setApp] = useState(null);
  const [spreadsheetData, setSpreadsheetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const spreadsheetRef = useRef(null);

  useEffect(() => {
    if (!appId) return;
    
    async function fetchApp() {
      setLoading(true);
      
      // Fetch app details
      const { data: appData, error: appError } = await supabase
        .from('apps')
        .select('*')
        .eq('id', appId)
        .single();
      
      if (appError) {
        console.error('Error fetching app:', appError);
        return;
      }
      
      setApp(appData);
      
      // Fetch spreadsheet data
      const { data, error } = await supabase
        .from('spreadsheet_data')
        .select('*')
        .eq('app_id', appId)
        .order('version', { ascending: false })
        .limit(1)
        .single();
      
      if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
        console.error('Error fetching spreadsheet data:', error);
      } else {
        setSpreadsheetData(data?.data || null);
      }
      
      setLoading(false);
    }

    fetchApp();
  }, [appId]);

  const saveSpreadsheetData = async (data) => {
    const { error } = await supabase
      .from('spreadsheet_data')
      .insert({
        app_id: appId,
        data: data,
        version: 1, // You would increment this based on previous version
      });
    
    if (error) console.error('Error saving spreadsheet data:', error);
  };

  if (loading) return <div>Loading app...</div>;
  if (!app) return <div>App not found</div>;

  return (
    <div>
      <Header app={app} />
      
      <main className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold mb-4">{app.name}</h1>
        <p className="mb-4">{app.description}</p>
        
        <Spreadsheet 
          ref={spreadsheetRef}
          initialData={spreadsheetData}
          onSave={saveSpreadsheetData}
        />
      </main>
    </div>
  );
}

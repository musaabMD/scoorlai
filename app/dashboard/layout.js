// app/dashboard/layout.js
import ClientLayout from './client-layout'
import { createClient } from "@/libs/supabase/server"
import { redirect } from "next/navigation"
import config from "@/config"

export default async function DashboardLayout({ children }) {
  const supabase = createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect(config.auth.loginUrl)
  }

  return <ClientLayout>{children}</ClientLayout>
}
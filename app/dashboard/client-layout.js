
// app/dashboard/client-layout.js
"use client"

import { AppSidebar } from "@/components/side/app-sidebar"
import { Suspense } from "react"
import Loading from "./loading"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function ClientLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </div>
    </SidebarProvider>
  )
}
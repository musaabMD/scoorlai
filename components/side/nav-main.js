// // // // // nav-main.js
// // // // "use client"

// // // // import React from "react"
// // // // import {
// // // //   SidebarMenu,
// // // //   SidebarMenuButton,
// // // //   SidebarMenuItem,
// // // // } from "@/components/ui/sidebar"

// // // // export function NavMain({ items }) {
// // // //   return (
// // // //     <SidebarMenu>
// // // //       {items.map((item) => (
// // // //         <SidebarMenuItem key={item.title}>
// // // //           <SidebarMenuButton asChild isActive={item.isActive}>
// // // //             <a href={item.url}>
// // // //               <item.icon />
// // // //               <span>{item.title}</span>
// // // //             </a>
// // // //           </SidebarMenuButton>
// // // //         </SidebarMenuItem>
// // // //       ))}
// // // //     </SidebarMenu>
// // // //   )
// // // // }
// // // // nav-main.js
// // // "use client"
// // // import React from "react"
// // // import {
// // //   SidebarMenu,
// // //   SidebarMenuButton,
// // //   SidebarMenuItem,
// // // } from "@/components/ui/sidebar"
// // // import {
// // //   Home,
// // //   ListChecks,
// // //   Cards,
// // //   Book,
// // //   BarChart,
// // //   Calendar,
// // //   Users,
// // //   Monitor,
// // // } from "lucide-react"

// // // export function NavMain({ items }) {
// // //   return (
// // //     <SidebarMenu>
// // //       {items.map((item) => (
// // //         <SidebarMenuItem key={item.title}>
// // //           <SidebarMenuButton asChild isActive={item.isActive}>
// // //             <a href={item.url}>
// // //               <item.icon />
// // //               <span>{item.title}</span>
// // //             </a>
// // //           </SidebarMenuButton>
// // //         </SidebarMenuItem>
// // //       ))}
// // //     </SidebarMenu>
// // //   )
// // // }
// // // nav-main.js
// // "use client"
// // import React from "react"
// // import {
// //   SidebarMenu,
// //   SidebarMenuButton,
// //   SidebarMenuItem,
// // } from "@/components/ui/sidebar"
// // import {
// //   Home,
// //   ListChecks,
// //   Cards,
// //   Book,
// //   BarChart,
// //   Calendar,
// //   Users,
// //   Monitor,
// // } from "lucide-react"

// // export function NavMain({ items }) {
// //   return (
// //     <SidebarMenu>
// //       {items.map((item) => {
// //         let Icon = null

// //         switch (item.icon) {
// //           case "Home":
// //             Icon = Home
// //             break
// //           case "ListChecks":
// //             Icon = ListChecks
// //             break
// //           case "Cards":
// //             Icon = Cards
// //             break
// //           case "Book":
// //             Icon = Book
// //             break
// //           case "BarChart":
// //             Icon = BarChart
// //             break
// //           case "Calendar":
// //             Icon = Calendar
// //             break
// //           case "Users":
// //             Icon = Users
// //             break
// //           case "Monitor":
// //             Icon = Monitor
// //             break
// //           default:
// //             break
// //         }

// //         return (
// //           <SidebarMenuItem key={item.title}>
// //             <SidebarMenuButton asChild isActive={item.isActive}>
// //               <a href={item.url}>
// //                 {Icon && <Icon />}
// //                 <span>{item.title}</span>
// //               </a>
// //             </SidebarMenuButton>
// //           </SidebarMenuItem>
// //         )
// //       })}
// //     </SidebarMenu>
// //   )
// // }
// // nav-main.js
// "use client"
// import React from "react"
// import {
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar"
// import {
//   Home,
//   ListChecks,
//   Cards,
//   Book,
//   BarChart,
//   Calendar,
//   Users,
//   Monitor,
// } from "lucide-react"

// const iconMap = {
//   Home,
//   ListChecks,
//   Cards,
//   Book,
//   BarChart,
//   Calendar,
//   Users,
//   Monitor,
// }

// export function NavMain({ items }) {
//   return (
//     <SidebarMenu>
//       {items.map((item) => {
//         const Icon = iconMap[item.icon]

//         return (
//           <SidebarMenuItem key={item.title}>
//             <SidebarMenuButton asChild isActive={item.isActive}>
//               <a href={item.url}>
//                 {Icon && <Icon className="mr-2 h-4 w-4" />}
//                 <span>{item.title}</span>
//               </a>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         )
//       })}
//     </SidebarMenu>
//   )
// }
"use client"
import React from "react"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({ items }) {
  return (
    <SidebarMenu>
      {items.map((item) => { 
        const Icon = item.icon // Directly use item.icon

        return (
          <SidebarMenuItem key={item.title}> 
            <SidebarMenuButton asChild isActive={item.isActive}>
              <a href={item.url}> 
                {Icon && <Icon className="mr-2 h-4 w-4" />}
                <span>{item.title}</span> 
              </a>
            </SidebarMenuButton>
            
          </SidebarMenuItem>
        )
      })}
      
    </SidebarMenu>
  )
}

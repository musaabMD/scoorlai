// // // // app-sidebar.js
// // // "use client"

// // // import * as React from "react"
// // // import {
// // //   AudioWaveform,
// // //   Blocks,
// // //   Calendar,
// // //   Command,
// // //   Home,
// // //   Inbox,
// // //   MessageCircleQuestion,
// // //   Search,
// // //   Settings2,
// // //   Sparkles,
// // //   Trash2,
// // // } from "lucide-react"

// // // import { NavFavorites } from "@/components/side/nav-favorites"
// // // import { NavMain } from "@/components/side/nav-main"
// // // import { NavSecondary } from "@/components/side/nav-secondary"
// // // import { NavWorkspaces } from "@/components/side/nav-workspaces"
// // // import { TeamSwitcher } from "@/components/side/team-switcher"
// // // import {
// // //   Sidebar,
// // //   SidebarContent,
// // //   SidebarHeader,
// // //   SidebarRail,
// // // } from "@/components/ui/sidebar"

// // // // Sample data
// // // const data = {
// // //   teams: [
// // //     {
// // //       name: "Acme Inc",
// // //       logo: Command,
// // //       plan: "Enterprise",
// // //     },
// // //     {
// // //       name: "Acme Corp.",
// // //       logo: AudioWaveform,
// // //       plan: "Startup",
// // //     },
// // //     {
// // //       name: "Evil Corp.",
// // //       logo: Command,
// // //       plan: "Free",
// // //     },
// // //   ],
// // //   navMain: [
// // //     {
// // //       title: "Search",
// // //       url: "#",
// // //       icon: Search,
// // //     },
// // //     {
// // //       title: "Ask AI",
// // //       url: "#",
// // //       icon: Sparkles,
// // //     },
// // //     {
// // //       title: "Home",
// // //       url: "#",
// // //       icon: Home,
// // //       isActive: true,
// // //     },
// // //     {
// // //       title: "Inbox",
// // //       url: "#",
// // //       icon: Inbox,
// // //       badge: "10",
// // //     },
// // //   ],
// // //   navSecondary: [
// // //     {
// // //       title: "Calendar",
// // //       url: "#",
// // //       icon: Calendar,
// // //     },
// // //     {
// // //       title: "Settings",
// // //       url: "#",
// // //       icon: Settings2,
// // //     },
// // //     {
// // //       title: "Templates",
// // //       url: "#",
// // //       icon: Blocks,
// // //     },
// // //     {
// // //       title: "Trash",
// // //       url: "#",
// // //       icon: Trash2,
// // //     },
// // //     {
// // //       title: "Help",
// // //       url: "#",
// // //       icon: MessageCircleQuestion,
// // //     },
// // //   ],
// // //   favorites: [
// // //     {
// // //       name: "Project Management & Task Tracking",
// // //       url: "#",
// // //       emoji: "📊",
// // //     },
// // //     {
// // //       name: "Family Recipe Collection & Meal Planning",
// // //       url: "#",
// // //       emoji: "🍳",
// // //     },
// // //     // Add rest of the favorites
// // //   ],
// // //   workspaces: [
// // //     {
// // //       name: "Personal Life Management",
// // //       emoji: "🏠",
// // //       pages: [
// // //         {
// // //           name: "Daily Journal & Reflection",
// // //           url: "#",
// // //           emoji: "📔",
// // //         },
// // //         {
// // //           name: "Health & Wellness Tracker",
// // //           url: "#",
// // //           emoji: "🍏",
// // //         },
// // //       ],
// // //     },
// // //     // Add rest of the workspaces
// // //   ],
// // // }

// // // export function AppSidebar(props) {
// // //   return (
// // //     <Sidebar className="border-r-0" {...props}>
// // //       <SidebarHeader>
// // //         <TeamSwitcher teams={data.teams} />
// // //         <NavMain items={data.navMain} />
// // //       </SidebarHeader>
// // //       <SidebarContent>
// // //         <NavFavorites favorites={data.favorites} />
// // //         <NavWorkspaces workspaces={data.workspaces} />
// // //         <NavSecondary items={data.navSecondary} className="mt-auto" />
// // //       </SidebarContent>
// // //       <SidebarRail />
// // //     </Sidebar>
// // //   )
// // // }
// // "use client"

// // import * as React from "react"
// // import {
// //   AudioWaveform,
// //   Blocks,
// //   Command,
// //   Gift,
// //   Home,
// //   Inbox,
// //   MessageSquarePlus,
// //   HelpCircle,
// //   Search,
// //   Crown,
// //   UserCircle,
// //   Sparkles,
// // } from "lucide-react"

// // import { NavFavorites } from "@/components/side/nav-favorites"
// // import { NavMain } from "@/components/side/nav-main"
// // import { NavSecondary } from "@/components/side/nav-secondary"
// // import { NavWorkspaces } from "@/components/side/nav-workspaces"
// // import { TeamSwitcher } from "@/components/side/team-switcher"
// // import {
// //   Sidebar,
// //   SidebarContent,
// //   SidebarHeader,
// //   SidebarRail,
// // } from "@/components/ui/sidebar"

// // // Sample data
// // const data = {
// //   teams: [
// //     {
// //       name: "Acme Inc",
// //       logo: Command,
// //       plan: "Enterprise",
// //     },
// //     {
// //       name: "Acme Corp.",
// //       logo: AudioWaveform,
// //       plan: "Startup",
// //     },
// //     {
// //       name: "Evil Corp.",
// //       logo: Command,
// //       plan: "Free",
// //     },
// //   ],
// //   navMain: [
// //     {
// //       title: "Search",
// //       url: "#",
// //       icon: Search,
// //     },
// //     {
// //       title: "Ask AI",
// //       url: "#",
// //       icon: Sparkles,
// //     },
// //     {
// //       title: "Home",
// //       url: "/dashboard",
// //       icon: Home,
// //       isActive: true,
// //     },
// //     {
// //       title: "Inbox",
// //       url: "#",
// //       icon: Inbox,
// //       badge: "10",
// //     },
// //   ],
// //   navSecondary: [
// //     {
// //       title: "Invite & Earn",
// //       url: "/dashboard/invite",
// //       icon: Gift,
// //     },
// //     {
// //       title: "Feedback",
// //       url: "/dashboard/feedback",
// //       icon: MessageSquarePlus,
// //     },
// //     {
// //       title: "Help Guide",
// //       url: "/dashboard/help",
// //       icon: HelpCircle,
// //     },
// //     {
// //       title: "Upgrade",
// //       url: "/dashboard/pricing",
// //       icon: Crown,
// //     },
// //     {
// //       title: "Profile",
// //       url: "/dashboard/profile",
// //       icon: UserCircle,
// //     },
// //   ],
// //   favorites: [
// //     {
// //       name: "Project Management & Task Tracking",
// //       url: "#",
// //       emoji: "📊",
// //     },
// //     {
// //       name: "Family Recipe Collection & Meal Planning",
// //       url: "#",
// //       emoji: "🍳",
// //     },
// //   ],
// //   workspaces: [
// //     {
// //       name: "Personal Life Management",
// //       emoji: "🏠",
// //       pages: [
// //         {
// //           name: "Daily Journal & Reflection",
// //           url: "#",
// //           emoji: "📔",
// //         },
// //       ],
// //     },
// //   ],
// // }

// // export function AppSidebar(props) {
// //   return (
// //     <Sidebar className="border-r-0" {...props}>
// //       <SidebarHeader>
// //         <TeamSwitcher teams={data.teams} />
// //         <NavMain items={data.navMain} />
// //       </SidebarHeader>
// //       <SidebarContent>
// //         <NavFavorites favorites={data.favorites} />
// //         <NavWorkspaces workspaces={data.workspaces} />
// //         <NavSecondary items={data.navSecondary} className="mt-auto" />
// //       </SidebarContent>
// //       <SidebarRail />
// //     </Sidebar>
// //   )
// // }
// // components/side/app-sidebar.js
// "use client"

// import * as React from "react"
// import {
//   AudioWaveform,
//   Blocks,
//   Command,
//   Gift,
//   Home,
//   Inbox,
//   MessageSquarePlus,
//   HelpCircle,
//   Search,
//   Crown,
//   UserCircle,
//   Sparkles,
// } from "lucide-react"
// import { NavFavorites } from "@/components/side/nav-favorites"
// import { NavMain } from "@/components/side/nav-main"
// import { NavSecondary } from "@/components/side/nav-secondary"
// import { TeamSwitcher } from "@/components/side/team-switcher"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarHeader,
//   SidebarRail,
// } from "@/components/ui/sidebar"

// // Sample data
// const data = {
//   teams: [
//     {
//       name: "Acme Inc",
//       logo: Command,
//       plan: "Enterprise",
//     },
//     {
//       name: "Acme Corp.",
//       logo: AudioWaveform,
//       plan: "Startup",
//     },
//     {
//       name: "Evil Corp.",
//       logo: Command,
//       plan: "Free",
//     },
//   ],
//   navMain: [
//     {
//       title: "Search",
//       url: "#",
//       icon: Search,
//     },
//     {
//       title: "Ask AI",
//       url: "#",
//       icon: Sparkles,
//     },
//     {
//       title: "Home",
//       url: "/dashboard",
//       icon: Home,
//       isActive: true,
//     },
//     {
//       title: "Inbox",
//       url: "#",
//       icon: Inbox,
//       badge: "10",
//     },
//   ],
//   navSecondary: [
//     {
//       title: "Invite & Earn",
//       url: "/dashboard/invite",
//       icon: Gift,
//     },
//     {
//       title: "Feedback",
//       url: "/dashboard/feedback",
//       icon: MessageSquarePlus,
//     },
//     {
//       title: "Help Guide",
//       url: "/dashboard/help",
//       icon: HelpCircle,
//     },
//     {
//       title: "Upgrade",
//       url: "/dashboard/pricing",
//       icon: Crown,
//     },
//     {
//       title: "Profile",
//       url: "/dashboard/profile",
//       icon: UserCircle,
//     },
//   ],
//   favorites: [
//     {
//       name: "Project Management & Task Tracking",
//       url: "#",
//       emoji: "📊",
//     },
//     {
//       name: "Family Recipe Collection & Meal Planning",
//       url: "#",
//       emoji: "🍳",
//     },
//   ],
//   workspaces: [
//     {
//       name: "Personal Life Management",
//       emoji: "🏠",
//       pages: [
//         {
//           name: "Daily Journal & Reflection",
//           url: "#",
//           emoji: "📔",
//         },
//       ],
//     },
//   ],
// }

// export function AppSidebar(props) {
//   return (
//     <Sidebar className="border-r-0" {...props}>
//       <SidebarHeader>
//         <TeamSwitcher teams={data.teams} />
//         <NavMain items={data.navMain} />
//       </SidebarHeader>
//       <SidebarContent>
//         <NavFavorites favorites={data.favorites} />
//         <NavSecondary items={data.navSecondary} className="mt-auto" />
//       </SidebarContent>
//       <SidebarRail />
//     </Sidebar>
//   )
// }
// components/side/app-sidebar.js
"use client"

import * as React from "react"
import {
  AudioWaveform,
  Blocks,
  Command,
  Gift,
  Home,
  Inbox,
  MessageSquarePlus,
  HelpCircle,
  Search,
  Crown,
  UserCircle,
  Sparkles,
  ListChecks,
  Cards,
  Book,
  BarChart,
  Calendar,
  Users,
  Monitor,
} from "lucide-react"
import { NavFavorites } from "@/components/side/nav-favorites"
import { NavMain } from "@/components/side/nav-main"
import { NavSecondary } from "@/components/side/nav-secondary"
import { TeamSwitcher } from "@/components/side/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Layers } from "lucide-react";

// Sample data
const data = {
  teams: [
    {
      name: "Exam1",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Exam3.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Exam2.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Browse Exams",
      url: "/dashboard/exams",
      icon: Home,
      isActive: true,
    },
    {
      title: "MCQ",
      url: "/dashboard/mcq",
      icon: ListChecks,
    },
    {
      title: "Flashcards",
      url: "/dashboard/flashcards",
      icon: Layers,
    },
    {
      title: "Library",
      url: "/dashboard/library",
      icon: Book,
    },
    {
      title: "Performance",
      url: "/dashboard/performance",
      icon: BarChart,
    },
    {
      title: "Study Scheduler",
      url: "/dashboard/planner",
      icon: Calendar,
    },
    {
      title: "Community",
      url: "/dashboard/community",
      icon: Users,
    },
    {
      title: "Exam Simulator",
      url: "/dashboard/simulator",
      icon: Monitor,
    },
  ],
  navSecondary: [
    {
      title: "Invite & Earn",
      url: "/dashboard/invite",
      icon: Gift,
    },
    {
      title: "Feedback",
      url: "/dashboard/feedback",
      icon: MessageSquarePlus,
    },
    {
      title: "Help Guide",
      url: "/dashboard/help",
      icon: HelpCircle,
    },
    {
      title: "Upgrade",
      url: "/dashboard/pricing",
      icon: Crown,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: UserCircle,
    },
  ],
  favorites: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Family Recipe Collection & Meal Planning",
      url: "#",
      emoji: "🍳",
    },
  ],
  workspaces: [
    {
      name: "Personal Life Management",
      emoji: "🏠",
      pages: [
        {
          name: "Daily Journal & Reflection",
          url: "#",
          emoji: "📔",
        },
      ],
    },
  ],
}

export function AppSidebar(props) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} /> 
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
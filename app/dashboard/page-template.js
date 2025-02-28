// "use client";

// import { usePathname } from "next/navigation";
// import { NavActions } from "@/components/side/nav-actions";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbList,
//   BreadcrumbPage,
// } from "@/components/ui/breadcrumb";
// import { Separator } from "@/components/ui/separator";
// import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

// // Define a function to clean up the pathname and format titles
// const formatTitle = (pathname) => {
//   // Remove "/dashboard/" from the beginning of the path
//   const cleanedPath = pathname.replace("/dashboard/", "");
  
//   // Map clean paths to user-friendly titles
//   const titles = {
//     "exams": "Exams",
//     "mcq": "MCQ",
//     "flashcards": "Flashcards",
//     "library": "Library",
//     "performance": "Performance",
//     "planner": "Study Scheduler",
//     "community": "Community",
//     "simulator": "Exam Simulator",
//     "feedback": "Feedback",
//     "help": "Help",
//     "invite": "Invite",
//     "pricing": "Pricing",
//     "profile": "Profile",
//   };

//   return `Scoorly ${titles[cleanedPath] || "Dashboard"}`;
// };

// export function PageTemplate({ title, children }) {
//   const pathname = usePathname(); // Get the current URL path
//   const dynamicTitle = title || formatTitle(pathname); // Use formatted title

//   return (
//     <SidebarInset className="flex-1">
//       <header className="flex h-14 shrink-0 items-center gap-2">
//         <div className="flex flex-1 items-center gap-2 px-3">
//           <SidebarTrigger />
//           <Separator orientation="vertical" className="mr-2 h-4" />
//           <Breadcrumb>
//             <BreadcrumbList>
//               <BreadcrumbItem>
//                 <BreadcrumbPage className="line-clamp-1">
//                   {dynamicTitle}
//                 </BreadcrumbPage>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//         <div className="ml-auto px-3">
//           <NavActions />
//         </div>
//       </header>
//       <div className="flex flex-1 flex-col gap-4 px-4 py-10">
//         {children}
//       </div>
//     </SidebarInset>
//   );
// }
"use client";

import { usePathname } from "next/navigation";
import { NavActions } from "@/components/side/nav-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

// Function to clean up the pathname and format titles
const formatTitle = (pathname) => {
  const cleanedPath = pathname.replace("/dashboard/", "");

  const titles = {
    "exams": "Exams",
    "mcq": "MCQ",
    "flashcards": "Flashcards",
    "library": "Library",
    "performance": "Performance",
    "planner": "Study Scheduler",
    "community": "Community",
    "simulator": "Exam Simulator",
    "feedback": "Feedback",
    "help": "Help",
    "invite": "Invite",
    "pricing": "Pricing",
    "profile": "Profile",
  };

  return `${titles[cleanedPath] || "Dashboard"}`;
};

export function PageTemplate({ title, children }) {
  const pathname = usePathname();
  const dynamicTitle = title || formatTitle(pathname);

  return (
    <SidebarInset className="flex-1">
      <header className="flex h-14 shrink-0 items-center gap-2">
        <div className="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                {/* Styled "S" in black box followed by "Scoorly" */}
                <span className="inline-flex items-center gap-1">
                  <span className="bg-blue-800 text-white font-semibold  font-sans px-2 py-1 rounded">
                    Scoorly
                  </span>
                  <span className=" text-black font-bold  font-mono px-1 py-1 ">{dynamicTitle} </span>
                </span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-3">
          <NavActions />
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 px-4 py-10">
        {children}
      </div>
    </SidebarInset>
  );
}


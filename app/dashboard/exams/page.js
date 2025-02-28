// pages/dashboard/exams.js
"use client";
import { PageTemplate } from "../page-template";
import { usePathname } from "next/navigation";
import ExamList from "@/components/app/examlist";

export default function Exams() {
  const pathname = usePathname();
  return (
  
      <PageTemplate>
      <ExamList />

    </PageTemplate>
  );
}

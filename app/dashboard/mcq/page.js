// pages/dashboard/mcq.js
"use client";
import MedicalTopics from "@/components/app/Topiclist";
import { PageTemplate } from "../page-template";
import { usePathname } from "next/navigation";

export default function MCQ() {
  const pathname = usePathname();
  return (
    <PageTemplate>
    <MedicalTopics/>
  </PageTemplate>
  );
}
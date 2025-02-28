// pages/dashboard/planner.js
"use client";
import { PageTemplate } from "../page-template";
import { usePathname } from "next/navigation";

export default function Planner() {
  const pathname = usePathname();
  return (
    <PageTemplate>
    <p>Welcome to the Flashcards page.</p>
  </PageTemplate>
  );
}
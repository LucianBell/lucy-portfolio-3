"use client";
import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  return (
    <section>
      <Header openSidebarClick={openSidebar} />
      <Sidebar open={sidebarOpened} onClose={closeSidebar} />
      {children}
    </section>
  );
}

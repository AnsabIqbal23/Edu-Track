"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../sidebarProvider";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconClock,
  IconCalendarDue,
  IconCoin,
  IconUserCircle,
  IconUserPlus
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Cookies from 'js-cookie'; // Import js-cookie to handle cookies
import { useRouter } from 'next/navigation'; // Import useRouter

export default function AdminSidebar() {

  const router = useRouter(); // Initialize useRouter

  const removeToken = () => {
    Cookies.remove('token'); // Remove the token from cookies
  };

  const handleDashboard = () => {
    router.push('/adminPage/dashboard');
  };

  const handleStudentsApproval = () => {
    router.push('/adminPage/student');
  };

  const handleTeacherApproval = () => {
    router.push('/adminPage/teacher');
  };

  const handleLibrarianApproval = () => {
    router.push('/adminPage/librarian');
  };

  const handleLogout = () => {
    removeToken();  // Remove token from cookies/localStorage
    router.push('/auth/login');  // Redirect to login page
  };

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
          <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: handleDashboard,
    },
    {
      label: "Approve Student",
      href: "#",
      icon: (
          <IconUserCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: handleStudentsApproval,
    },
    {
      label: "Add Teacher",
      href: "#",
      icon: (
          <IconUserPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: handleTeacherApproval,
    },
    {
      label: "Add Librarian",
      href: "#",
      icon: (
          <IconUserPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: handleLibrarianApproval,
    },
    {
      label: "Time Table",
      href: "#",
      icon: (
          <IconClock className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Exam Schedule",
      href: "#",
      icon: (
          <IconCalendarDue className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Fees",
      href: "#",
      icon: (
          <IconCoin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
          <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: handleLogout,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
      (<div
          className={cn(
              "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
              "h-screen"
          )}>
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
      </div>)
  );
}
export const Logo = () => {
  return (
      (<Link
          href="#"
          className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
        <div
            className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-medium text-black dark:text-white whitespace-pre">
          Edu Track
        </motion.span>
      </Link>)
  );
};
export const LogoIcon = () => {
  return (
      (<Link
          href="#"
          className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
        <div
            className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      </Link>)
  );
};
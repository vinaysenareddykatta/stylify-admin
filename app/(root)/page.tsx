"use client";

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";
import { SignIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <>
      <UserButton afterSignOutUrl="/" />
      <p>landing page</p>
      <div className="flex items-center justify-center h-full">
        <SignIn />
      </div>
    </>
  );
}

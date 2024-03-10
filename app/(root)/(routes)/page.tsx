"use client";

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [onOpen, isOpen]);

  return null;

  // return (
  //   <div className="p-4 flex space-x-1">
  //     <h1>This is protected landing page</h1>
    
  //   </div>
  // );
};
export default SetupPage;

import Image from "next/image";

import { SignIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
      <div className="flex items-center justify-center h-full">
        <SignIn />
      </div>
    </>
  );
}

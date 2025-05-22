// Account.tsx
import React from "react";
import { DraggableCardDemo } from "@/app/components/auth/account/home/Cards";

const Account = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        height: "100vh",
      }}
    >
      <div className="h-full py-10 w-full bg-gradient-to-r px-5 lg:px-0 from-black/60 via-slate-700/60 to-pink-600/60 backdrop-blur-sm md:backdrop-blur-xl flex items-center justify-center">
        <DraggableCardDemo />
      </div>
    </div>
  );
};

export default Account;

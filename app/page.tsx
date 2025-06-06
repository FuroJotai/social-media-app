"use client"

import LoadingScreen from "@/components/LoadingScreen";
import CommentModal from "@/components/modals/CommentModal";
import PostFeed from "@/components/PostFeed";
import Sidebar from "@/components/Sidebar";
import SignUpPromt from "@/components/SignUpPromt";
import Widgets from "@/components/Widgets";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="text-[#0F1419] min-h-screen  
    max-w-[1440px] mx-auto flex justify-center
    ">
      <Sidebar/>
      <PostFeed/>
      <Widgets/>
      
    </div>

    <CommentModal />

    <SignUpPromt/>
    <LoadingScreen/>
    </>
  )
}

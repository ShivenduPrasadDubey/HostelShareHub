"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // To link to chat page

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const [copied, setCopied] = useState("");
  const router = useRouter();
  
  const handleProfileClick = () => {
    if (post.creator?._id === session?.user.id) return router.push("/profile");
    router.push(`/profile/${post.creator?._id}?name=${post.creator?.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  const openWhatsAppChat = () => {
    const countryCode = '+91'; // Example for India
    const phoneNumber = post.number.replace(/\D/g, ''); // Remove any non-digit characters
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;
    
    if (phoneNumber.length < 10) {
      alert("Phone number is invalid");
      return;
    }
    
    const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(fullPhoneNumber)}`;
    window.open(whatsappURL, "_blank");
  };
  
  
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          {post.creator?.image && (
            <Image
              src={post.creator.image}
              alt="user_image"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />
          )}
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator?.username || "Unknown User"}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator?.email || "No Email"}
            </p>
            <p className="font-inter text-sm text-gray-500">
              Room: {post.roomNumber || "No Room Number"}
            </p>
            <p className="font-inter text-sm text-gray-500">
              Hostel: {post.hostelName || "No Hostel Name"}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied === post.prompt ? "/tick.svg" : "/copy.svg"}
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>

      <div className="flex justify-between items-center">
        <Image
          src="/whatsapp.svg"
          alt="whatsapp_icon"
          width={25}
          height={25}
          onClick={openWhatsAppChat}
          className="object-contain cursor-pointer mb-2"
        />
        {/* {session?.user?.id !== post.creator?._id && (
          <Link href={`/chat/${session?.user?.id}/${post.creator?._id}`}>
            <button className="font-inter text-lg orange_gradient cursor-pointer">
              Chat
            </button>
          </Link>
        )} */}
        <p
          className="font-inter text-sm blue_gradient cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          {post.tag}
        </p>
      </div>

      {session?.user?.id === post.creator?._id && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;

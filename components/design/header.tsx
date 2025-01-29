"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-[42px] px-[32px] h-auto min-h-[128px]">
      {/* Logo */}
      <div className="flex items-center gap-x-[8px] min-w-[214px] min-h-[31px]">
        <img src="/Group 427319719.png" alt="Group 427319719" />
        <p className="font-normal text-brown text-[24px] leading-[130%] monum">
          InsightPod
        </p>
      </div>

      {/* Menu Desktop */}
      <nav className="hidden lg:flex items-center gap-x-[32px] text-darkgrey text-body5 leading-body5 font-normal poppins">
        <a
          href="#"
          className="hover:cursor-pointer hover:text-darkgrey/80 transition-all"
        >
          About
        </a>
        <a
          href="#"
          className="hover:cursor-pointer hover:text-darkgrey/80 transition-all"
        >
          Subscribe
        </a>
        <a
          href="#"
          className="hover:cursor-pointer hover:text-darkgrey/80 transition-all"
        >
          Episode
        </a>
        <a
          href="#"
          className="hover:cursor-pointer hover:text-darkgrey/80 transition-all"
        >
          Insiders
        </a>
      </nav>

      {/* Bouton Subscribe */}
      <Button className="hidden lg:block shadow-none w-[214px] h-[64px] py-[22px] px-[8px] rounded-[96px] text-center stroke-[#532822] border border-[#532822] bg-inherit text-body3 leading-body3 font-bold hover:cursor-pointer hover:bg-[#532822]/60 transition-all">
        <span className="text-[#532822]/100">Subscribe now</span>
      </Button>

      {/* Menu Burger (Mobile) */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-darkgrey">
          {isOpen ? (
            // Icône de fermeture (croix)
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Icône du menu hamburger
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-[128px] left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 space-y-4 lg:hidden">
          <a
            href=""
            className="text-darkgrey text-body5 poppins hover:cursor-pointer hover:text-darkgrey/80 transition-all"
          >
            About
          </a>
          <a
            href=""
            className="text-darkgrey text-body5 poppins hover:cursor-pointer hover:text-darkgrey/80 transition-all"
          >
            Subscribe
          </a>
          <a
            href=""
            className="text-darkgrey text-body5 poppins hover:cursor-pointer hover:text-darkgrey/80"
          >
            Episode
          </a>
          <a
            href=""
            className="text-darkgrey text-body5 poppins hover:cursor-pointer hover:text-darkgrey/80"
          >
            Insiders
          </a>
          <Button className="w-[214px] h-[64px] py-[22px] px-[8px] rounded-[96px] border hover:cursor-pointer border-[#532822] bg-inherit text-body3 leading-body3 font-bold hover:bg-[#532822]/60 transition-all">
            <span className="text-[#532822]/100">Subscribe now</span>
          </Button>
        </div>
      )}
    </header>
  );
}

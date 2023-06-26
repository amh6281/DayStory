"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Daystory Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="logo_text">하루 이야기</p>
      </Link>

      {/* Mobile Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-story" className="black_btn">
              하루 만들기
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              로그아웃
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => signIn(provider.id)}
              className="black_btn"
            >
              로그인
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import logo from "@/public/logo/logo.png";
import Link from "next/link";
import MenuBaseNavbar from "./MenuBaseNavbar";
import { Menu } from "lucide-react";
import Drawer from "./Drawer";
import MobileMenuBaseNavbar from "./MobileMenuBaseNavbar";
import useStore from "@/store";
import userPlaceHolder from "@/public/image/user-placeholder.png";

export default function BaseNavbar() {
  const [showSignInSubmenu, setShowSignInSubmenu] = useState(false);
  const [showSignUpSubmenu, setShowSignUpSubmenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useStore();

  const handleOverlayClick = () => {
    setShowSignInSubmenu(false);
    setShowSignUpSubmenu(false);
  };

  return (
    <nav className="sticky top-[-.5px] z-50 h-16 bg-secondary sm:h-20">
      <Container extraClassName={"!py-0"}>
        <div className="relative flex h-16 items-center justify-between sm:h-20">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              priority
              loading="eager"
              className="h-16 w-full sm:h-20"
            />
          </Link>
          {(showSignInSubmenu || showSignUpSubmenu) && (
            <div
              className="fixed inset-0 z-50"
              onClick={handleOverlayClick}
            ></div>
          )}

          <menu className="hidden sm:block">
            <MenuBaseNavbar
              showSignInSubmenu={showSignInSubmenu}
              setShowSignInSubmenu={setShowSignInSubmenu}
              showSignUpSubmenu={showSignUpSubmenu}
              setShowSignUpSubmenu={setShowSignUpSubmenu}
            />
          </menu>

          <div className="block sm:hidden">
            <Menu
              onClick={() => setShowMenu(true)}
              className="h-6 w-6 cursor-pointer text-white"
            />
          </div>

          <Drawer
            open={showMenu}
            setOpen={setShowMenu}
            title={
              user ? (
                <div className="flex items-center gap-2 rounded-full border border-white p-1 pl-3.5">
                  <div>
                    <p className="text-sm font-medium text-white">
                      {user?.full_name}
                    </p>
                    <p className="text-start text-xs text-white">
                      {user?.role.split("_").join(" ")}
                    </p>
                  </div>
                  <div className="size-8">
                    <Image
                      src={
                        Object.keys(user?.avatar)?.length
                          ? user?.avatar["at200x200"]
                          : userPlaceHolder
                      }
                      width={100}
                      height={100}
                      className="size-8 rounded-full"
                      alt="user avatar"
                    />
                  </div>
                </div>
              ) : (
                <Link href="/" className="focus:outline-none">
                  <Image src={logo} alt="logo" className="h-10 w-full " />
                </Link>
              )
            }
          >
            <MobileMenuBaseNavbar setShowMenu={setShowMenu} />
          </Drawer>
        </div>
      </Container>
    </nav>
  );
}

import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import useStore from "@/store";
import Image from "next/image";
import userPlaceHolder from "@/public/image/user-placeholder.png";
import { Menu } from "@headlessui/react";
import { ProfileMenuDropDown } from "@/lib/keyChain";
import { usePathname } from "next/navigation";
import { addRolePrefixToUrlsAndFilter, cn } from "@/lib/utils";

export default function MenuBaseNavbar({
  showSignInSubmenu,
  setShowSignInSubmenu,
  showSignUpSubmenu,
  setShowSignUpSubmenu,
}) {
  const { user } = useStore();
  const pathname = usePathname();
  return (
    <ul className="relative z-50 flex items-center gap-4 text-white lg:gap-8">
      <li>
        <Link
          href="/"
          onClick={() => {
            setShowSignInSubmenu(false);
            setShowSignUpSubmenu(false);
          }}
          className={cn("text-white", {
            "underline underline-offset-2": pathname === "/",
            "": pathname !== "/",
          })}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          onClick={() => {
            setShowSignInSubmenu(false);
            setShowSignUpSubmenu(false);
          }}
          className={cn("text-white", {
            "underline underline-offset-2": pathname === "/blog",
            "": pathname !== "/blog",
          })}
        >
          Blog
        </Link>
      </li>

      {user ? (
        <Menu as="div" className="relative hidden sm:block">
          <Menu.Button className="flex cursor-pointer items-center gap-2 rounded-full border border-white p-1 pl-3.5">
            <div>
              <p className="text-start text-sm font-medium text-white">
                {user?.full_name}
              </p>
              <p className="text-start text-xs text-white">
                {user?.role?.split("_")?.join(" ")}
              </p>
            </div>
            <div className="size-10">
              <Image
                src={
                  Object.keys(user?.avatar)?.length
                    ? user?.avatar["at200x200"]
                    : userPlaceHolder
                }
                width={100}
                height={100}
                className="size-10 rounded-full"
                alt="user avatar"
              />
            </div>
          </Menu.Button>

          <Menu.Items
            className={
              "absolute right-0 z-50 mt-1 w-52 origin-top-right rounded-lg bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            }
          >
            {addRolePrefixToUrlsAndFilter(
              ProfileMenuDropDown,
              ["/profile", "/open-jobs"],
              user?.role,
            ).map((route, index) => (
              <Menu.Item key={index + 1}>
                <Link
                  href={route.href}
                  className={cn(
                    "flex w-52 items-center gap-2 p-4 text-center text-sm font-medium duration-300 first:rounded-t-md last:rounded-b-md",
                    {
                      "bg-secondary text-white hover:bg-secondary hover:text-white":
                        pathname === route.href,
                      "bg-white text-black hover:bg-secondary-bg":
                        pathname !== route.href,
                      "hover:bg-danger hover:text-white":
                        route.href === "/logout",
                    },
                  )}
                >
                  <route.icon className="h-5 w-5" />
                  {route.name}
                </Link>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      ) : (
        <>
          <li className="relative">
            <span
              className="flex cursor-pointer items-center gap-1"
              onClick={() => {
                setShowSignInSubmenu(!showSignInSubmenu);
                setShowSignUpSubmenu(false);
              }}
            >
              Sign In
              <div>{showSignInSubmenu ? <ChevronUp /> : <ChevronDown />}</div>
            </span>
            <ul
              className={`absolute right-0 top-10 w-60 rounded-md shadow-lg ${
                showSignInSubmenu ? "block" : "hidden"
              }`}
            >
              <Link
                onClick={() => setShowSignInSubmenu(false)}
                href="/sign-in"
                className="block rounded-t bg-primary p-4 text-black duration-100 hover:text-white"
              >
                User Sign In
              </Link>
              <hr />
              <Link
                onClick={() => setShowSignInSubmenu(false)}
                href="/driver-sign-in"
                className="block bg-primary p-4 text-black duration-100 hover:text-white"
              >
                Driver Sign In
              </Link>
              <hr />
              <Link
                onClick={() => setShowSignInSubmenu(false)}
                href="/cleaning-provider-sign-in"
                className="block rounded-b bg-primary p-4 text-black duration-100 hover:text-white"
              >
                Cleaning Provider Sign In
              </Link>
            </ul>
          </li>
          <li className="relative">
            <span
              className="flex cursor-pointer items-center gap-1"
              onClick={() => {
                setShowSignUpSubmenu(!showSignUpSubmenu);
                setShowSignInSubmenu(false);
              }}
            >
              Sign Up
              <div>{showSignUpSubmenu ? <ChevronUp /> : <ChevronDown />}</div>
            </span>
            <ul
              className={`absolute right-0 top-10 w-60 rounded-md shadow-lg ${
                showSignUpSubmenu ? "block" : "hidden"
              }`}
            >
              <Link
                onClick={() => setShowSignUpSubmenu(false)}
                href="/sign-up"
                className="block rounded-t bg-primary p-4 text-black duration-100 hover:text-white"
              >
                User Sign Up
              </Link>
              <hr />
              <Link
                onClick={() => setShowSignUpSubmenu(false)}
                href="/driver-sign-up"
                className="block bg-primary p-4 text-black duration-100 hover:text-white"
              >
                Driver Sign Up
              </Link>
              <hr />
              <Link
                onClick={() => setShowSignUpSubmenu(false)}
                href="/cleaning-provider-sign-up"
                className="block rounded-b bg-primary p-4 text-black duration-100 hover:text-white"
              >
                Cleaning Provider Sign Up
              </Link>
            </ul>
          </li>
        </>
      )}
    </ul>
  );
}

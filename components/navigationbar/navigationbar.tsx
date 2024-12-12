"use client";

import * as React from "react";
import Link from "next/link";
import { UserButton, SignInButton, useAuth } from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationBar() {
  const { isSignedIn } = useAuth();

  return (
    <NavigationMenu className="list-none py-4 pl-4 gap-4">
      <NavigationMenuItem>
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/about" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            About the Author
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      {/* <div className="text-right flex gap-4">
        {isSignedIn ? <UserButton/> : <SignInButton/>}
      </div> */}
    </NavigationMenu>
  );
}

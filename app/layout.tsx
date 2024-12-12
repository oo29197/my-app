import { NavigationBar } from "@/components/navigationbar/navigationbar";
import { Button } from "@/components/ui/button";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "anti-drugs-briefing",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-teal-950 pt-1 bg-landing bg-cover pb-16`}
        >
          <header className="flex justify-end">
            <SignedOut>
              <div className="pr-8 pt-4">
                <SignInButton>
                  <Button variant="lightBlue" size="lg">
                    Sign In
                  </Button>
                </SignInButton>
              </div>
            </SignedOut>
          </header>

          <SignedIn>
            <div className="flex justify-between pr-4">
              <NavigationBar />
              <UserButton />
            </div>
            {children}
          </SignedIn>

          <SignedOut>
            <div className="flex justify-center items-center text-4xl h-screen text-center text-white">
              <p>Please sign in to access this content.</p>
            </div>
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}

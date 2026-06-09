import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/app/components/LightRays";
import Navbar from "@/app/components/Navbar";
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import {ReactElement} from "@/types";

const geistSans : NextFontWithVariable = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono : NextFontWithVariable = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackTrack",
  description: "The simplest way to organize and attend tech events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-screen bg-black">
          <div className="absolute h-full w-full" >
              <LightRays
                  raysOrigin="top-center"
                  raysColor="#AAFF00"
                  raysSpeed={1}
                  lightSpread={0.5}
                  rayLength={3}
                  followMouse={true}
                  mouseInfluence={0.1}
                  noiseAmount={0}
                  distortion={0}
                  className="custom-rays"
                  pulsating={false}
                  fadeDistance={1}
                  saturation={1}
              />
          </div>
        <main>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}

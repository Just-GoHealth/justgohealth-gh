"use client";
import { useIsMobile } from "./use-mobile";

export default function IntroMessageHero() {
  const isMobile = useIsMobile();

  return (
    <div className="relative h-screen order-1 lg:order-2 overflow-hidden">
      <div className={`absolute inset-0 flex items-center justify-center ${isMobile ? "px-6" : "px-12"}`}>
        <h1 className={`${isMobile ? "text-4xl" : "text-7xl"} font-bold text-center text-black leading-tight`}>
          It all starts with your
          <br />
          Mental Health
        </h1>
      </div>
    </div>
  );
}



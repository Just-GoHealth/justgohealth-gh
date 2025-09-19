"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ContactsModal from "@/components/ContactsModal";
import { useIsMobile } from "@/components/use-mobile";
import { useState } from "react";

export default function ManifestoPage() {
  const isMobile = useIsMobile();
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header elements as part of main content */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
        <Button 
          variant="ghost" 
          className={`text-black font-medium hover:opacity-70 transition-opacity ${isMobile ? "text-lg" : "text-2xl"}`}
        >
          Manifesto
        </Button>
        
        <div className="flex items-center justify-center flex-1">
          <Link href="/">
          <Image
            src="/logos/logo-black.png"
            alt="JustGo Health Logo"
            width={220}
            height={40}
            className={`object-contain ${isMobile ? "h-8" : "h-10"}`}
          />
          </Link>
        </div>
        
        <Link href="/join-us">
          <Button variant="ghost" className={`text-black font-medium hover:opacity-70 transition-opacity ${isMobile ? "text-lg" : "text-2xl"}`}>
            Join Us
          </Button>
        </Link>
      </div>

      {/* Main Content - Manifesto Text */}
      <main className={`flex-1 flex items-center justify-center px-8 py-20 ${isMobile ? "mt-14" : "-mt-14"}`}>
        <div className={`max-w-4xl w-full text-center ${isMobile ? "scale-90 -mt-[250px]" : ""}`}>
          <h1 className={`text-nowrap font-bold text-red-600 mb-8 mt-14 ${isMobile ? "text-3xl -ml-8" : "text-8xl -ml-28"}`}>
            The Best. Ever. Anywhere.
          </h1>
          
          <div className={`space-y-6 leading-relaxed text-black text-left ${isMobile ? "text-xl scale-100" : "text-3xl scale-[1.2]"}`}>
            <p className="mt-12">
              We, at JustGo Health, promise on our honor to ensure that the mental health of every Ghanaian student is <span className="text-red-600 font-bold">the best ever, anywhere on earth.</span>
              
              <p className="mt-6">{`Our target is clear: to build stronger mental health support in Ghanaian schools than even at Harvard University. On Harvard's campus, a student has`} <span className="text-red-600 font-bold">15 options for mental health care, all digital</span> and <span className="text-red-600 font-bold">available 24/7.</span></p>
            </p>
              <p className={`text-red-500 font-semibold -mt-4 -mb-4 text-center ${isMobile ? "text-lg" : "text-3xl"}`}>We have studied. We are prepared. We are committed.</p>
          </div>
        </div>
      </main>

      {/* Footer elements as part of main content */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
        <Button 
          variant="ghost" 
          className={`text-black font-medium hover:opacity-70 transition-opacity ${isMobile ? "text-lg" : "text-2xl"}`}
          onClick={() => setShowContacts(true)}
        >
          Contacts
        </Button>
      </div>

      {/* Contacts Modal */}
      <ContactsModal 
        isOpen={showContacts} 
        onClose={() => setShowContacts(false)} 
      />
    </div>
  );
}

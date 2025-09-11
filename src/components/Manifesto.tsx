"use client";
import { Button } from "@/components/ui/button";
import { PlayIcon, ArrowLeft } from "lucide-react";
import Image from "next/image";

interface ManifestoProps {
  onBack?: () => void;
}

export default function Manifesto({ onBack }: ManifestoProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header elements as part of main content */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
        <Button 
          variant="ghost" 
          className="text-black text-2xl font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
          onClick={onBack}
        >
          <ArrowLeft className="w-6 h-6" />
          Back
        </Button>
        
        <div className="flex items-center justify-center flex-1">
          <Image
            src="/logos/logo-black.png"
            alt="JustGo Health Logo"
            width={220}
            height={40}
            className="h-10 object-contain"
          />
        </div>
        
        <Button variant="ghost" className="text-black text-2xl font-medium hover:opacity-70 transition-opacity">
          Join Us
        </Button>
      </div>

      {/* Main Content - Manifesto Text */}
      <main className="flex-1 flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl w-full">
          <div className="bg-gray-50 p-12 rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold text-center mb-12 text-black">
              Our Manifesto
            </h1>
            
            <div className="space-y-8 text-lg leading-relaxed text-gray-800">
              <p className="text-xl font-semibold text-center mb-8 text-[#2bb573]">
                {`"It all starts with your Mental Health."`}
              </p>
              
              <p>
                {`At JustGo Health, we believe that mental health is the foundation of everything. 
                It's not just about treating symptoms—it's about understanding that your mental 
                well-being is the cornerstone of your entire life experience.`}
              </p>
              
              <p>
                {`We've seen too many people struggle in silence, too many dreams deferred because 
                of untreated mental health challenges. We've witnessed the power of early 
                intervention, the transformation that comes from understanding and addressing 
                mental health proactively.`}
              </p>
              
              <p>
                Our mission is simple yet profound: to make mental health screening accessible, 
                to connect people with the care they need, and to break down the barriers that 
                prevent people from seeking help.
              </p>
              
              <p>
                {`We're not just building an app—we're building a movement. A movement that says 
                it's okay to not be okay, that seeking help is a sign of strength, not weakness. 
                A movement that believes everyone deserves access to quality mental health care.`}
              </p>
              
              <p>
                {`Because when you're mentally healthy, everything else becomes possible. Your 
                relationships flourish, your work becomes meaningful, your dreams become 
                achievable. Mental health isn't just part of your life—it IS your life.`}
              </p>
              
              <p className="text-xl font-semibold text-center mt-12 text-[#2bb573]">
                Join us. Screen yourself. Connect with care. Lock in your mental health.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer elements as part of main content */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
        <Button variant="ghost" className="text-black text-2xl font-medium hover:opacity-70 transition-opacity">
          Contacts
        </Button>
        
        <Button className="w-[70px] h-[70px] rounded-full flex items-center justify-center hover:opacity-90 transition-all" style={{ backgroundColor: '#2b3990' }}>
          <PlayIcon fill="white" className="w-16 h-16 scale-[2.4]" />
        </Button>
      </div>
    </div>
  );
}

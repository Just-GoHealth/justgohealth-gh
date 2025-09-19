"use client";
import { X, Instagram } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "./use-mobile";

interface ContactsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactsModal({ isOpen, onClose }: ContactsModalProps) {
  const isMobile = useIsMobile();
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-[28px] shadow-xl mx-auto relative border-red-500 border-[5px] ${
          isMobile 
            ? "p-6 max-w-[440px] w-[calc(100%-2rem)] mx-4 scale-[0.99] overflow-auto max-h-[90vh]" 
            : "p-10 max-w-xl w-[calc(100%-4rem)]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Title */}
          <h2 className={`font-bold text-red-500 mb-6 text-center mt-8 ${
            isMobile ? "text-2xl" : "text-4xl"
          }`}>
            Contact JustGo Health
          </h2>

          {/* Email Section */}
          <div className={`mb-8 font-semibold ${isMobile ? "text-lg" : "text-2xl"}`}>
            <p className="text-gray-700 mb-2 leading-relaxed">
              For business enquiries or just to chat about mental health, you can reach out to us at
            </p>
            <a 
              href="mailto:jgohealth@gmail.com" 
              onClick={() => window.open("mailto:jgohealth@gmail.com", "_blank")}
              className="text-blue-600 hover:text-blue-800 underline break-all"
            >
              jgohealth@gmail.com
            </a>
          </div>

          {/* Call Section */}
          <div className="mb-8">
            <p className={`text-black font-semibold mb-4 ${isMobile ? "text-xl" : "text-2xl text-nowrap"}`}>
              Call Prince & Dr. Obed
            </p>
            
            <div className={`flex ${isMobile ? "flex-row gap-4" : "gap-10"}`}>
              <div>
                <p className={`text-black font-semibold text-nowrap ${isMobile ? "text-sm" : "text-2xl text-nowrap"}`}>
                  JustGo Health Ghana
                </p>
                <p className={`text-gray-700 ${isMobile ? "text-sm" : "text-2xl"}`}>
                  +233 (0) 538 920 991
                </p>
              </div>
              
              <div>
                <p className={`text-black font-semibold text-nowrap ${isMobile ? "text-sm" : "text-2xl text-nowrap"}`}>
                  JustGo Health USA
                </p>
                <p className={`text-gray-700 ${isMobile ? "text-sm" : "text-2xl"}`}>
                  +1 (720) 492-7660
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="">
            <div className={`flex ${isMobile ? "flex-row items-center gap-3" : "flex-col gap-6"}`}>
              <p className={`text-red-500 font-semibold ${isMobile ? "text-sm" : "text-2xl"}`}>
                Follow us
              </p>
              <div className={`flex ${isMobile ? "flex-row gap-2" : "flex-col gap-6"}`}>
                <button onClick={() => window.open("https://www.instagram.com/justgo_health/", "_blank")} className={`flex items-center gap-2 bg-gray-800 text-white px-3 py-1.5 rounded-full hover:bg-gray-700 transition-colors ${
                  isMobile ? "text-xs" : "text-lg"
                }`}>
                  <span>Instagram</span>
                  <Instagram className="w-4 h-4" />
                </button>
                
                <button onClick={() => window.open("https://www.linkedin.com/company/justgotech/", "_blank")} className={`flex items-center gap-2 bg-gray-800 text-white px-3 py-1.5 rounded-full hover:bg-gray-700 transition-colors ${
                  isMobile ? "text-xs" : "text-lg"
                }`}>
                  <span>LinkedIn</span>
                  <Image src="/linkedin.svg" alt="LinkedIn" width={16} height={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

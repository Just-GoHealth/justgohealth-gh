"use client";
import { X, Instagram } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "../hooks/use-mobile";

interface ContactsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactsModal({ isOpen, onClose }: ContactsModalProps) {
  const isMobile = useIsMobile();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6"
      onClick={onClose}
    >
      <div
  className={`bg-white rounded-2xl shadow-xl border-red-500 border-[3px] relative w-full max-w-4xl ${
    isMobile
      ? "p-6 max-h-[90vh] overflow-auto"
      : "p-10 max-h-[80vh] overflow-auto"
  }`}
  onClick={(e) => e.stopPropagation()}
>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Title */}
        <h2
          className={`font-bold text-red-500 text-center mb-6 ${
            isMobile ? "text-2xl" : "text-4xl"
          }`}
        >
          Contact JustGo Health
        </h2>

       <div className={`mb-6 font-semibold ${isMobile ? "text-base" : "text-lg"}`}>
  <p className="text-gray-700 leading-relaxed whitespace-nowrap">
    For business enquiries or a chat about mental health, you can reach out to us at{" "}
    <a
      href="mailto:jgohealth@gmail.com"
      onClick={() => window.open("mailto:jgohealth@gmail.com", "_blank")}
      className="text-blue-600 hover:text-blue-800 underline"
    >
      jgohealth@gmail.com
    </a>
  </p>
</div>


        {/* Call Section */}
        <div className="mb-6">
        <p
    className={`text-black font-semibold mb-4 text-center ${
      isMobile ? "text-lg" : "text-2xl"
    }`}
  >
    Call Prince & Dr. Obed
  </p>

          <div className={`flex flex-col sm:flex-row sm:justify-between gap-4`}>
            {/* Ghana */}
            <div className="flex flex-col">
              <p className={`text-black font-semibold ${isMobile ? "text-sm" : "text-lg"}`}>
                JustGo Health Ghana
              </p>
              <p className={`text-gray-700 font-mono ${isMobile ? "text-sm" : "text-lg"}`}>
                +233 (0) 538 920 991
              </p>
            </div>

            {/* USA */}
            <div className="flex flex-col">
              <p className={`text-black font-semibold ${isMobile ? "text-sm" : "text-lg"}`}>
                JustGo Health USA
              </p>
              <p className={`text-gray-700 font-mono ${isMobile ? "text-sm" : "text-lg"}`}>
                +1 (720) 492-7660
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-6 flex flex-col items-center">
          <p
            className={`text-red-500 font-semibold mb-4 ${
              isMobile ? "text-sm" : "text-lg"
            }`}
          >
            Follow Us
          </p>

          <div className="flex justify-between w-64">
            {/* Instagram */}
            <button
              onClick={() =>
                window.open("https://www.instagram.com/justgo_health/", "_blank")
              }
              className={`flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors ${
                isMobile ? "text-xs" : "text-base"
              }`}
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </button>

            {/* LinkedIn */}
            <button
              onClick={() =>
                window.open("https://www.linkedin.com/company/justgotech/", "_blank")
              }
              className={`flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors ${
                isMobile ? "text-xs" : "text-base"
              }`}
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={16}
                height={16}
              />
              <span>LinkedIn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

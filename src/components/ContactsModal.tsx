"use client";
import { X, Instagram } from "lucide-react";
import Image from "next/image";

interface ContactsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactsModal({ isOpen, onClose }: ContactsModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white p-10 rounded-[28px] shadow-xl max-w-xl w-[calc(100%-4rem)] mx-auto relative border-red-500 border-[5px]"
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
          <h2 className="text-4xl font-bold text-red-500 mb-6 text-center mt-8">
            Contact JustGo Health
          </h2>

          {/* Email Section */}
          <div className="mb-8 text-2xl font-semibold">
            <p className="text-gray-700 mb-2 leading-relaxed">
              For business enquiries or just to chat about mental health, you can reach out to us at
            </p>
            <a 
              href="mailto:jgohealth@gmail.com" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              jgohealth@gmail.com
            </a>
          </div>

          {/* Call Section */}
          <div className="mb-8">
            <p className="text-red-500 font-semibold mb-4 text-2xl">Call Prince & Dr. Obed</p>
            
            <div className="flex gap-10">
              <div>
                <p className="text-red-500 text-2xl font-semibold">JustGo Health Ghana</p>
                <p className="text-gray-700 text-2xl">+233 (0) 538 920 991</p>
              </div>
              
              <div>
                <p className="text-red-500 text-2xl font-semibold">JustGo Health USA</p>
                <p className="text-gray-700 text-2xl">+1 (720) 492-7660</p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="">
            <div className="flex gap-6">
            <p className="text-red-500 font-semibold mt-2 text-2xl">Follow us</p>
              <button className="flex text-lg items-center gap-4 bg-gray-800 text-white px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors">
                <span>Instagram</span>
                <Instagram className="w-5 h-5" />
              </button>
              
              <button className="flex text-lg items-center gap-6 bg-gray-800 text-white px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors">
                <span>LinkedIn</span>
                <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

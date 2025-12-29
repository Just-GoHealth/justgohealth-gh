"use client";
import { Button } from "@/components/ui/button";
import { PlayIcon, ArrowLeft, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface JoinUsProps {
  onBack?: () => void;
}

export default function JoinUs({ onBack }: JoinUsProps) {
  const [formData, setFormData] = useState({
    joiningAs: "Ambassador",
    fullName: "",
    phoneNumber: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ joiningAs: "Ambassador", fullName: "", phoneNumber: "" });
    }, 2000);
  };

  const joiningOptions = ["Ambassador", "Advisor", "Partner"];

  const medicinePartners = [
    "Dr. Nathaniel Nii Codjoe",
    "Prof. Daniel Ansong", 
    "Dr. Obed Ofori Nyarko",
    "Prof. Sister Emily Frances O. Ansah",
    "Dr. Jonathan Odame",
    "Mrs. Ethel Obeng-Treve",
    "Dr. Sammy Ohene"
  ];

  const technologyPartners = [
    "Patrick Twumasi Yeboah",
    "Eyram Quarshie", 
    "Bernard Ograh",
    "Patrick Amenuku Huninganaye",
    "Prince Kwabena Baadu"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
            <p className="text-xl font-semibold text-center mt-4">Success!</p>
          </div>
        </div>
      )}

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

      {/* Main Content */}
      <main className="flex flex-1 pt-20">
        {/* Left Side - Form */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <h1 className="text-4xl font-bold text-black mb-8">
              If you care about mental health, come on board.
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Joining As Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Joining as
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {formData.joiningAs}
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      ▼
                    </span>
                  </button>
                  
                  {showDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {joiningOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, joiningAs: option });
                            setShowDropdown(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                GO
              </Button>
            </form>
          </div>
        </div>

        {/* Right Side - Partners Lists */}
        <div className="w-1/2 p-8">
          <div className="space-y-12">
            {/* Medicine Partners */}
            <div>
              <h2 className="text-4xl font-bold text-green-600 mb-6">
                Medicine . {medicinePartners.length}
              </h2>
              <div className="space-y-3">
                {medicinePartners.map((partner, index) => (
                  <div key={index} className="text-lg text-green-500">
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Partners */}
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-6">
                Technology . {technologyPartners.length}
              </h2>
              <div className="space-y-3">
                {technologyPartners.map((partner, index) => (
                  <div key={index} className="text-lg text-blue-500">
                    {partner}
                  </div>
                ))}
              </div>
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

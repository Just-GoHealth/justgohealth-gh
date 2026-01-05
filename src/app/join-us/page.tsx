"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactsModal from "@/components/ContactsModal";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

export default function JoinUsPage() {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    joiningAs: "Ambassador",
    fullName: "",
    phoneNumber: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

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
    "Dr. Sammy Ohene",
  ];

  const technologyPartners = [
    "Patrick Twumasi Yeboah",
    "Eyram Quarshie",
    "Bernard Ograh",
    "Patrick Amenuku Huninganaye",
    "Prince Kwabena Baadu",
  ];

  const ambassadors = [
    "Akosua Animwaa Ofori-Agyei",
    "Akua Bowaa Essah",
    "Ama Serwaa Ankobea",
    "Antoinette Eyram Kudroha",
    "Antoinette Owusu",
    "Christabel Ago Boakye",
    "Dufe Joshua Mawuden Kwadzor",
    "Emmanuella Obenewaa Adade",
    "Fatoh Mariama Abdul",
    "Godfred Dzidefo Amoah",
    "Jennifer Semebia Adde",
    "Joshua Lante Lamptey",
    "Julian Nii Amartey Amamoo",
    "Kelvin Mawuena Blewsi",
    "Maud Nana Yaa Amankwah Opoku",
    "Peace Hodiyah Nathanya Omenogor",
    "Queen Manuella L. V. Tongar",
    "Rahinatu Suleman",
    "Roberta Emmanuella Tachie-Menson",
    "Romeo Worlako Akakpo",
    "Tembil Yinpala Ella",
  ];

  return (
    <div
      className={`h-screen flex flex-col bg-white ${
        isMobile ? "overflow-y-auto" : "overflow-hidden"
      }`}
    >
      {/* Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
            <p className="text-xl font-semibold text-center mt-4">Success!</p>
          </div>
        </div>
      )}

      {/* Header elements as part of main content */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
        <Link href="/manifesto">
          <Button
            variant="ghost"
            className={`text-black font-medium hover:opacity-70 transition-opacity ${
              isMobile ? "text-lg" : "text-2xl"
            }`}
          >
            Manifesto
          </Button>
        </Link>

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
          <Button
            variant="ghost"
            className={`text-black font-medium hover:opacity-70 transition-opacity ${
              isMobile ? "text-lg" : "text-2xl"
            }`}
          >
            Join Us
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <main className={`flex flex-1 pt-20 ${isMobile ? "flex-col" : ""}`}>
        {/* Form Section */}
        <div
          className={`flex items-center justify-center p-8 ${
            isMobile ? "w-full" : "w-1/2"
          }`}
        >
          <div
            className={`max-w-md w-full ${
              isMobile ? "-mt-8 scale-90" : "-mt-10"
            }`}
          >
            <h1 className="text-4xl font-bold text-black mb-8">
              If you care about mental health, come on board.
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
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
                      <ChevronDown className="w-6 h-6" />
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
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  maxLength={10}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-24 bg-green-600 scale-[0.8] text-white px-2 py-8 rounded-lg font-medium hover:bg-green-700 transition-colors self-end"
              >
                <span className="text-5xl mt-3">GO</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Partners Lists Section */}
        <div
          className={`p-4 overflow-auto ${
            isMobile
              ? "w-full scale-100 -mt-16 ml-6"
              : "w-1/2 scale-[0.9] -mt-10"
          }`}
        >
          <div
            className={`${
              isMobile ? "flex flex-col space-y-12" : "space-y-12"
            }`}
          >
            {/* Medicine Partners */}
            <div className={`${isMobile ? "flex-1" : ""}`}>
              <h2
                className={`font-bold text-green-600 text-nowrap mb-6 ${
                  isMobile ? "text-3xl" : "text-5xl"
                }`}
              >
                Medicine . {medicinePartners.length}
              </h2>
              <div className={`space-y-1 ${isMobile ? "-mt-2" : "-mt-4"}`}>
                {medicinePartners.map((partner, index) => (
                  <div
                    key={index}
                    className={`text-green-500 ${
                      isMobile ? "text-lg" : "text-3xl"
                    }`}
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Partners */}
            <div className={`${isMobile ? "flex-1 ml-2" : ""}`}>
              <h2
                className={`font-bold text-blue-600 text-nowrap mb-6 ${
                  isMobile ? "text-3xl" : "text-5xl"
                }`}
              >
                Technology . {technologyPartners.length}
              </h2>
              <div className={`space-y-1 ${isMobile ? "-mt-2" : "-mt-4"}`}>
                {technologyPartners.map((partner, index) => (
                  <div
                    key={index}
                    className={`text-blue-500 ${
                      isMobile ? "text-lg" : "text-3xl"
                    }`}
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            {/* Ambassadors */}
            <div className={`${isMobile ? "flex-1" : ""}`}>
              <h2
                className={`font-bold text-nowrap mb-6 ${
                  isMobile ? "text-3xl" : "text-5xl"
                }`}
                style={{ color: "#2b3990" }}
              >
                Ambassadors . {ambassadors.length}
              </h2>
              <div className={`space-y-1 ${isMobile ? "-mt-2" : "-mt-4"}`}>
                {ambassadors.map((ambassador, index) => (
                  <div
                    key={index}
                    className={`${isMobile ? "text-lg" : "text-3xl"}`}
                    style={{ color: "#2b3990" }}
                  >
                    {ambassador}
                  </div>
                ))}
              </div>
            </div>

            {/* Contacts Button */}
            <div className={`${isMobile ? "flex-1 -mt-8" : "mt-8"}`}>
              <Button
                variant="ghost"
                className={`text-black font-medium hover:opacity-70 transition-opacity ${
                  isMobile ? "text-lg" : "text-2xl"
                }`}
                onClick={() => setShowContacts(true)}
              >
                Contacts
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Contacts Modal */}
      <ContactsModal
        isOpen={showContacts}
        onClose={() => setShowContacts(false)}
      />
    </div>
  );
}

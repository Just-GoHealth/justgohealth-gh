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
      className={`min-h-screen flex flex-col bg-white ${
        isMobile ? "overflow-y-auto" : "overflow-hidden"
      }`}
    >
      {/* Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
            <p className="text-xl font-semibold text-center mt-4">Success!</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 md:px-12 py-4 z-10">
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
      <main
        className={`flex flex-col md:flex-row flex-1 pt-24 px-4 md:px-12 gap-8 md:gap-12 justify-center`}
      >
        {/* Form Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <div className="max-w-md w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center md:text-left">
              If you care about mental health, come on board!
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
                className="w-32 md:w-40 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors self-center"
              >
                <span className="text-xl md:text-2xl">GO</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Partners Lists */}
        <div className="flex flex-col items-center justify-start w-full md:w-1/2 space-y-8 overflow-auto max-h-[75vh] px-2 md:px-0">
          {/* Medicine Partners */}
          <div className="text-center w-full">
            <h2 className="font-bold text-green-600 text-2xl md:text-4xl mb-4">
              Medicine . {medicinePartners.length}
            </h2>
            <div className="flex flex-col gap-2">
              {medicinePartners.map((partner, idx) => (
                <div key={idx} className="text-green-500 text-lg md:text-xl break-words">
                  {partner}
                </div>
              ))}
            </div>
          </div>

          {/* Technology Partners */}
          <div className="text-center w-full">
            <h2 className="font-bold text-blue-600 text-2xl md:text-4xl mb-4">
              Technology . {technologyPartners.length}
            </h2>
            <div className="flex flex-col gap-2">
              {technologyPartners.map((partner, idx) => (
                <div key={idx} className="text-blue-500 text-lg md:text-xl break-words">
                  {partner}
                </div>
              ))}
            </div>
          </div>

          {/* Ambassadors */}
          <div className="text-center w-full">
            <h2
              className="font-bold text-2xl md:text-4xl mb-4"
              style={{ color: "#2b3990" }}
            >
              Ambassadors . {ambassadors.length}
            </h2>
            <div className="flex flex-col gap-1">
              {ambassadors.map((ambassador, idx) => (
                <div
                  key={idx}
                  className="text-lg md:text-xl break-words"
                  style={{ color: "#2b3990" }}
                >
                  {ambassador}
                </div>
              ))}
            </div>
          </div>

          {/* Contacts Button */}
          <Button
            variant="ghost"
            className={`text-black font-medium hover:opacity-70 transition-opacity text-lg md:text-2xl mt-4`}
            onClick={() => setShowContacts(true)}
          >
            Contacts
          </Button>
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

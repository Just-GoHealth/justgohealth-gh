"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactsModal from "@/components/ContactsModal";
import { useIsMobile } from "@/components/use-mobile";
import { useState } from "react";
import PartnerCard from "@/components/ui/PartnerCard";

export default function JoinUsPage() {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    joiningAs: "Ambassador",
    fullName: "",
    phoneNumber: ""
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
    "Dr. Sammy Ohene"
  ];

  const technologyPartners = [
    "Patrick Twumasi Yeboah",
    "Eyram Quarshie", 
    "Bernard Ograh",
    "Patrick Amenuku Huninganaye",
    "Prince Kwabena Baadu",
    "Kello Derrick Junior",
    "Kelvin Osei Mintah"
  ];

  const ambassadors = [
    "Akinloye Fatia",
    "Albert Otokunor Sampah",
    "Akosua Animwaa Ofori-Agyei",
    "Akua Bowaa Essah",
    "Ama Serwaa Ankobea",
    "Anabel Dumashie",
    "Antoinette Eyram Kudroha",
    "Antoinette Owusu",
    "Babbritar Bediako",
    "Bannor Justice Appiah",
    "Christabel Ago Boakye",
    "Christabel Amoah",
    "Condoleezza Taylor",
    "Dufe Joshua Mawuden Kwadzor",
    "Emmanuella Obenewaa Adade",
    "Fatoh Mariama Abdul",
    "Godfred Dzidefo Amoah",
    "Jennifer Semebia Adde",
    "John Wobube Aziegba",
    "Joshua Lante Lamptey",
    "Julian Nii Amartey Amamoo",
    "Kelvin Mawuena Blewusi",
    "Komashie Esinam Aku",
    "Kwabinah Prince Amissah",
    "Lloyd Asiedu",
    "Maud Nana Yaa Amankwah Opoku",
    "Miheso Moses",
    "Naomi Adorkorbidzi",
    "Nichole Maame Yaa Darkwa",
    "Nyande Gertrude Dede",
    "Peace Hodiyah Nathanya Omenogor",
    "Peter Tefuttor",
    "Priscilla Nyarko",
    "Queen Manuella L. V. Tongar",
    "Rahinatu Suleman",
    "Roberta Emmanuella Tachie-Menson",
    "Romeo Worlako Akakpo",
    "Roland Kojo Johnson",
    "Rose Ayorkor Johnson",
    "Selassie Korley",
    "Tembil Yinpaala Ella",
    "Wendy Mary Etornam Agbeko"
  ];
  

  // Simple, compact name list component
  const NameList = ({ names, color }: { names: string[], color: string }) => (
    <div className={`${isMobile ? 'space-y-1' : 'grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-2'}`}>
      {names.map((name, index) => (
        <div
          key={index}
          className={`flex items-center group cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors ${isMobile ? 'border-b border-gray-100 last:border-b-0' : ''}`}
        >
          <div 
            className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
            style={{ backgroundColor: color }}
          />
          <span 
            className={`font-medium group-hover:opacity-80 transition-opacity ${isMobile ? 'text-sm' : 'text-sm'}`}
            style={{ color }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`h-screen flex flex-col bg-white ${isMobile ? "overflow-y-auto" : "overflow-hidden"}`}>
      {/* Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
            <p className="text-xl font-semibold text-center mt-4">Welcome to the team!</p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <Link href="/manifesto">
          <Button 
            variant="ghost" 
            className={`text-black font-medium hover:opacity-70 transition-opacity ${isMobile ? "text-lg" : "text-xl"}`}
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
            className={`text-black font-medium hover:opacity-70 transition-opacity ${isMobile ? "text-lg" : "text-xl"}`}
          >
            Join Us
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className={`flex-1 ${isMobile ? "flex flex-col" : "flex md:flex-row"}`}>
        {/* Form Section - Moved up for desktop */}
        <div className={`${isMobile ? "order-1 px-6 py-8" : "md:w-2/5 md:flex md:items-start md:justify-center md:px-8 md:pt-16"}`}>
          <div className={`w-full max-w-md ${isMobile ? "" : "md:sticky md:top-24"}`}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Join Our Mission
              </h1>
              <p className="text-gray-600 mb-8">
                If you care about mental health, come on board.
              </p>
              
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-gray-100"
                    >
                      {formData.joiningAs}
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <ChevronDown className={`w-5 h-5 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                      </span>
                    </button>
                    
                    {showDropdown && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                        {joiningOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, joiningAs: option });
                              setShowDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-gray-100"
                    placeholder="Enter your full name"
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-gray-100"
                    placeholder="Enter your phone number"
                    required
                    maxLength={10}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  JOIN THE MISSION
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Partners Lists Section */}
        <div className={`${isMobile ? "order-2 px-6 py-8" : "flex-1 px-8 py-16 overflow-y-auto md:h-full"}`}>
          <div className="space-y-12">
            {/* Medicine Partners */}
            <section>
              <div className="flex items-center mb-4">
                <h2 className={`font-bold text-green-600 ${isMobile ? "text-xl" : "text-3xl"}`}>
                  Medicine
                </h2>
                <span className={`ml-3 px-2 py-1 bg-green-100 text-green-800 rounded-full font-semibold ${isMobile ? "text-xs" : "text-sm"}`}>
                  {medicinePartners.length}
                </span>
              </div>
              <NameList names={medicinePartners} color="#22C55E" />
            </section>

            {/* Technology Partners */}
            <section>
              <div className="flex items-center mb-4">
                <h2 className={`font-bold text-blue-600 ${isMobile ? "text-xl" : "text-3xl"}`}>
                  Technology
                </h2>
                <span className={`ml-3 px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold ${isMobile ? "text-xs" : "text-sm"}`}>
                  {technologyPartners.length}
                </span>
              </div>
              <NameList names={technologyPartners} color="#3B82F6" />
            </section>

            {/* Ambassadors */}
            <section>
              <div className="flex items-center mb-4">
                <h2 className={`font-bold ${isMobile ? "text-xl" : "text-3xl"}`} style={{ color: '#2b3990' }}>
                  Ambassadors
                </h2>
                <span className={`ml-3 px-2 py-1 rounded-full font-semibold ${isMobile ? "text-xs" : "text-sm"}`} style={{ backgroundColor: '#e0e7ff', color: '#2b3990' }}>
                  {ambassadors.length}
                </span>
              </div>
              <NameList names={ambassadors} color="#2b3990" />
            </section>

            {/* Contacts Button */}
            <section className="text-center pt-4">
              <Button 
                variant="outline"
                className="px-6 py-2 font-semibold rounded-lg border hover:bg-gray-50 transition-colors"
                onClick={() => setShowContacts(true)}
              >
                View All Contacts
              </Button>
            </section>
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
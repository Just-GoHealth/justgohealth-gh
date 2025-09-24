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

  // Mobile NameList component (unchanged)
  const MobileNameList = ({ names, color }: { names: string[], color: string }) => (
    <div className="space-y-1">
      {names.map((name, index) => (
        <div
          key={index}
          className="flex items-center group cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
        >
          <div 
            className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
            style={{ backgroundColor: color }}
          />
          <span 
            className="font-medium group-hover:opacity-80 transition-opacity text-sm"
            style={{ color }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  );

  // Desktop Column component
  const DesktopColumn = ({ title, names, color, bgColor }: { 
    title: string; 
    names: string[]; 
    color: string;
    bgColor: string;
  }) => (
    <div className="flex-1 min-h-0">
      {/* Column Header */}
      <div 
        className="p-4 text-center border-b sticky top-0 z-10"
        style={{ backgroundColor: bgColor, borderBottomColor: color }}
      >
        <h2 className="text-lg font-bold mb-1" style={{ color }}>
          {title}
        </h2>
        <div 
          className="inline-flex items-center justify-center px-3 py-1 rounded-full font-medium text-xs"
          style={{ backgroundColor: color, color: 'white' }}
        >
          {names.length} Members
        </div>
      </div>

      {/* Names List */}
      <div className="p-3 overflow-y-auto h-full">
        <div className="space-y-1">
          {names.map((name, index) => (
            <div
              key={index}
              className="group cursor-pointer py-2 px-3 rounded-lg transition-all duration-200 hover:shadow-sm border border-transparent hover:border-gray-200 hover:bg-white"
            >
              <div className="flex items-center">
                <div 
                  className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span 
                  className="font-medium text-xs leading-relaxed group-hover:opacity-80 transition-opacity"
                  style={{ color: color }}
                >
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
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
      {isMobile ? (
        // Mobile Layout (unchanged)
        <main className="flex-1 flex flex-col">
          {/* Form Section */}
          <div className="order-1 px-6 py-8">
            <div className="w-full max-w-md mx-auto">
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

          {/* Mobile Partners Lists */}
          <div className="order-2 px-6 py-8">
            <div className="space-y-12">
              {/* Medicine Partners */}
              <section>
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-bold text-green-600">
                    Medicine
                  </h2>
                  <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 rounded-full font-semibold text-xs">
                    {medicinePartners.length}
                  </span>
                </div>
                <MobileNameList names={medicinePartners} color="#22C55E" />
              </section>

              {/* Technology Partners */}
              <section>
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-bold text-blue-600">
                    Technology
                  </h2>
                  <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold text-xs">
                    {technologyPartners.length}
                  </span>
                </div>
                <MobileNameList names={technologyPartners} color="#3B82F6" />
              </section>

              {/* Ambassadors */}
              <section>
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-bold" style={{ color: '#2b3990' }}>
                    Ambassadors
                  </h2>
                  <span className="ml-3 px-2 py-1 rounded-full font-semibold text-xs" style={{ backgroundColor: '#e0e7ff', color: '#2b3990' }}>
                    {ambassadors.length}
                  </span>
                </div>
                <MobileNameList names={ambassadors} color="#2b3990" />
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
      ) : (
        // Desktop Layout - Centered with padding
        <main className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="w-full max-w-6xl h-full max-h-[600px] flex bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Form Section - Left Sidebar */}
            <div className="w-72 bg-gray-50 border-r border-gray-200 flex items-center justify-center p-6">
              <div className="w-full max-w-xs">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Join Our Mission
                  </h1>
                  <p className="text-gray-600 mb-6 text-sm">
                    If you care about mental health, come on board.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Joining As Dropdown */}
                    <div className="relative">
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Joining as
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-gray-100 text-sm"
                        >
                          {formData.joiningAs}
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                          </span>
                        </button>
                        
                        {showDropdown && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                            {joiningOptions.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, joiningAs: option });
                                  setShowDropdown(false);
                                }}
                                className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors text-sm"
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
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-gray-100 text-sm"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-gray-100 text-sm"
                        placeholder="Enter your phone number"
                        required
                        maxLength={10}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
                    >
                      JOIN THE MISSION
                    </Button>
                  </form>
                </div>

                {/* Contacts Button */}
                <div className="text-center mt-4">
                  <Button 
                    variant="outline"
                    className="px-4 py-2 font-medium rounded-lg border hover:bg-white hover:shadow-md transition-all text-sm"
                    onClick={() => setShowContacts(true)}
                  >
                    View All Contacts
                  </Button>
                </div>
              </div>
            </div>

            {/* Three Column Layout */}
            <div className="flex-1 flex">
              {/* Medicine Column */}
              <DesktopColumn 
                title="Medicine" 
                names={medicinePartners} 
                color="#22C55E"
                bgColor="#f0fdf4"
              />
              
              {/* Technology Column */}
              <DesktopColumn 
                title="Technology" 
                names={technologyPartners} 
                color="#3B82F6"
                bgColor="#eff6ff"
              />
              
              {/* Ambassadors Column */}
              <DesktopColumn 
                title="Ambassadors" 
                names={ambassadors} 
                color="#2b3990"
                bgColor="#f0f0ff"
              />
            </div>
          </div>
        </main>
      )}

      {/* Contacts Modal */}
      <ContactsModal 
        isOpen={showContacts} 
        onClose={() => setShowContacts(false)} 
      />
    </div>
  );
}
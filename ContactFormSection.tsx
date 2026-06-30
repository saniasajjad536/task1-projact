import React, { useState } from 'react';

function ContactFormSection() {
  // State to track if the form was successfully submitted
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Individual controlled states for validation
  const [formData, setFormData] = useState({
    universityName: '',
    city: '',
    studentCount: '',
    contactName: '',
    whatsAppNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic structural validation check
    if (
      formData.universityName && 
      formData.city && 
      formData.studentCount && 
      formData.contactName && 
      formData.whatsAppNumber
    ) {
      setIsSubmitted(true);
    } else {
      alert("Please fill in all the required fields before submitting.");
    }
  };

  return (
    <section className="w-full bg-[#050b14] py-24 px-6 md:px-16 font-sans text-white selection:bg-red-500/30">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* UPPER FIXED SECTION HEADER */}
        <div className="mb-12">
          <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#ef4444] mb-3">
            LET'S TALK PARTNERSHIP
          </span>
          <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-white">
            Bring CareerOS to your campus.
          </h2>
        </div>

        {/* CONDITION STATE RENDERING */}
        {!isSubmitted ? (
          /* FORM BLOCK (image_47b259.png) */
          <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-3xl mx-auto">
            
            {/* Row 1: University Name & City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-gray-300 tracking-wide">
                  University Name <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  type="text"
                  name="universityName"
                  value={formData.universityName}
                  onChange={handleChange}
                  placeholder="e.g. Lahore University"
                  className="w-full bg-[#0d1527] text-sm text-gray-200 border border-slate-800 rounded-xl px-4 py-3.5 placeholder-gray-600 focus:outline-hidden focus:border-slate-700 focus:ring-1 focus:ring-slate-700"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-gray-300 tracking-wide">
                  City <span className="text-[#ef4444]">*</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-[#0d1527] text-sm text-gray-300 border border-slate-800 rounded-xl px-4 py-3.5 focus:outline-hidden focus:border-slate-700"
                  required
                >
                  <option value="" disabled hidden>Select city</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Faisalabad">Faisalabad</option>
                </select>
              </div>
            </div>

            {/* Row 2: Student Count & Contact Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-gray-300 tracking-wide">
                  Approximate Student Count <span className="text-[#ef4444]">*</span>
                </label>
                <select
                  name="studentCount"
                  value={formData.studentCount}
                  onChange={handleChange}
                  className="w-full bg-[#0d1527] text-sm text-gray-300 border border-slate-800 rounded-xl px-4 py-3.5 focus:outline-hidden focus:border-slate-700"
                  required
                >
                  <option value="" disabled hidden>Select range</option>
                  <option value="1-500">1 - 500 students</option>
                  <option value="501-2000">501 - 2,000 students</option>
                  <option value="2001-5000">2,001 - 5,000 students</option>
                  <option value="5000+">5,000+ students</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-gray-300 tracking-wide">
                  Contact Name <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-[#0d1527] text-sm text-gray-200 border border-slate-800 rounded-xl px-4 py-3.5 placeholder-gray-600 focus:outline-hidden focus:border-slate-700"
                  required
                />
              </div>
            </div>

            {/* Row 3: WhatsApp Number */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-gray-300 tracking-wide">
                WhatsApp Number <span className="text-[#ef4444]">*</span>
              </label>
              <div className="flex items-center w-full bg-[#0d1527] border border-slate-800 rounded-xl overflow-hidden focus-within:border-slate-700">
                <div className="bg-slate-900/40 text-sm font-bold text-gray-400 px-4 py-3.5 border-r border-slate-800/80 select-none">
                  +92
                </div>
                <input
                  type="tel"
                  name="whatsAppNumber"
                  value={formData.whatsAppNumber}
                  onChange={handleChange}
                  placeholder="300 1234567"
                  className="w-full bg-transparent text-sm text-gray-200 px-4 py-3.5 placeholder-gray-600 focus:outline-hidden"
                  required
                />
              </div>
            </div>

            {/* Submit Action Block */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-[#de4e37] hover:bg-[#cb3f29] text-white font-bold text-[14px] px-8 py-3.5 rounded-full transition-all duration-150 cursor-pointer shadow-lg shadow-red-900/10 active:scale-[0.99]"
              >
                Request a Demo
              </button>
              <p className="text-gray-500 text-[11px] font-medium mt-4 tracking-wide">
                Our partnerships team will schedule your demo within 24 hours.
              </p>
            </div>

          </form>
        ) : (
          /* SUCCESS STATE BLOCK (image_47b5c4.png) */
          <div className="py-12 animate-fade-in text-center max-w-xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-4">
              Thanks — request received!
            </h3>
            <p className="text-gray-400 text-[13px] md:text-[14px] leading-relaxed font-medium tracking-wide">
              Our partnerships team will reach out on WhatsApp within 24 <br className="hidden md:inline" /> hours to schedule your demo.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default ContactFormSection;
 {/* --- SECTION 6: BOTTOM CALL TO ACTION (image_07cc23.jpg) --- */}
 function Bottom (){
    return (
 
     <section className="w-full bg-[#FBF9F6] text-gray-900 py-16 text-center border-t border-gray-200">
         <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Your career capital <br />starts today</h2>
           <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8">Join 2,400+ Pakistani students already building verified portfolios, tracking their Employability Score, and landing remote roles.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => { setAuthMode("signup"); setShowAuthModal(true); }} className="w-full sm:w-auto bg-[#D93B29] hover:bg-[#b83222] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-[#D93B29]/20 transition-all">⚡ Start Free — It's Free</button>
            <button onClick={() => alert("Connecting you with CareerOS Support Team...")} className="w-full sm:w-auto bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2">✉ Talk to Our Team</button>
          </div>
         </div>
      </section>
      )
    }
    export default Bottom;
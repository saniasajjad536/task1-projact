function Section4(){
    return(
//{/* --- SECTION 4: WHY CAREEROS / 3 CARDS (image_07cb84.png) --- */}
       <section id="how-it-works" className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-[#080F1C] to-[#0D1829]">
        <div className="text-left mb-12">
          <span className="text-[#D93B29] text-xs font-bold uppercase tracking-widest">Why CareerOS</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-2">Built for the Pakistani Graduate</h2>
          <p className="text-gray-400 mt-2 max-w-xl">Stop collecting certificates. Start building proof. CareerOS turns your work into verified career capital.</p>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#FBF9F6] text-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col justify-between group hover:scale-[1.02] transition-all">
            <div>
              <span className="text-xs text-gray-400 font-bold block mb-4">— 01</span>
              <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center mb-6 text-xl text-blue-600">🏆</div>
              <h3 className="text-xl font-bold mb-3">Proof of Work, Not Just Certificates</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every task you complete becomes a verified portfolio piece. Employers see what you've actually built — not just your GPA.</p>
            </div>
            <button className="text-sm font-bold text-gray-900 mt-6 flex items-center gap-1 group-hover:text-[#D93B29] transition-colors">Learn more →</button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FBF9F6] text-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col justify-between group hover:scale-[1.02] transition-all">
            <div>
              <span className="text-xs text-gray-400 font-bold block mb-4">— 02</span>
              <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center mb-6 text-xl text-purple-600">🧠</div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Career Roadmap</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Your personal AI career coach analyzes your skills, suggests roles, and builds a week-by-week action plan tailored to your goals.</p>
            </div>
            <button className="text-sm font-bold text-gray-900 mt-6 flex items-center gap-1 group-hover:text-[#D93B29] transition-colors">Learn more →</button>
          </div>

           {/* Card 3 */}
           <div className="bg-[#FBF9F6] text-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col justify-between group hover:scale-[1.02] transition-all">
             <div>
               <span className="text-xs text-gray-400 font-bold block mb-4">— 03</span>
              <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center mb-6 text-xl text-emerald-600">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Verified by Employers</h3>
               <p className="text-gray-600 text-sm leading-relaxed">Your Employability Score is co-developed with 85+ hiring companies. When they see it, they trust it — it's the credential they asked for.</p>
             </div>
             <button className="text-sm font-bold text-gray-900 mt-6 flex items-center gap-1 group-hover:text-[#D93B29] transition-colors">Learn more →</button>
           </div>
         </div>
       </section>

    );
}
export default Section4;
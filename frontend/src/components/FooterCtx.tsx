
import { useState } from "react"
import { PhoneMockup } from "./PhoneAnimation";

function FooterCtx() {
    const [email, setEmail] = useState('')
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log('Email submitted:', email)
    }
  
    return (
      
        <div className="w-full max-w-screen-xl bg-[#C4502D] rounded-2xl p-0 md:p-12 shadow-2xl relative overflow-hidden mx-auto">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5 font-bold text-white mb-8 max-w-2xl leading-tight">
              Everyone tech Nerd needs to hear, these crazy tech product!
            </h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-6 py-4 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 text-lg"
                required
              />
              <button
                type="submit"
                className="bg-[#F47B20] text-white px-8 py-4 rounded-xl hover:bg-[#E06910] transition-colors duration-200 whitespace-nowrap text-lg font-semibold"
              >
                join Our Community
              </button>
            </form>
          </div>
  
          
          <div className="absolute right-5 top-6 transform  hidden lg:block ">
            <PhoneMockup />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] rounded-b-3xl"></div>
          </div>
        </div>
    );
  }
  
  export default FooterCtx
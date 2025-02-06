export const PhoneMockup = () => {
    return (
      <div className="relative w-[300px] h-[600px] transition-all duration-300 group">
        <div className="absolute inset-0 bg-black rounded-[3rem] p-3 transition-transform duration-300 hover:-translate-y-2 hover:rotate-[-4deg]">
          <div className="bg-white h-full w-full rounded-[2.5rem] overflow-hidden">
            <div className="bg-primary/5 p-4">
              {/* Header */}
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                <div className="text-lg font-semibold text-orange">कatha</div>
              </div>
              
              {/* Content */}
              <div className="space-y-3 shadow-facey ">
                <img src="/dwag.jpg"  className="rounded-xl " />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
import CaseStudies from "../components/CaseStudies";
import FooterCtx from "../components/FooterCtx";
import { AvatarGroup } from "./../components/AvatarGroup";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-orange-300 relative overflow-hidden">
      <div className="pt-4 pl-4 text-5xl capitalize italic text-orange">
      कatha
      </div>
      <div className="flex flex-col lg:flex-row ">
        {/* Left content */}
        <div className="flex-1 text-left pt-24 pl-16 space-y-8 py-20 gap-44">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Secrets of building the Great Tech Product
          </h1>
          <p className="text-xl text-gray-600">
            Dive into our database of 4,405 case story & join our community of
            thousands of successful founders.
          </p>
          <div className="space-y-4">
            <AvatarGroup />
            <p className="text-sm text-gray-600">Creator & Founder's</p>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 flex pt-10 pr-44 items-center justify-end">
          <div className="relative w-80 h-80 overflow-hidden rounded-2xl  group">
            <div className="absolute inset-0 flex items-center justify-center ">
              <img
                src="/storyboard.jpg"
                alt="Business Success"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out -rotate-90 group-hover:scale-110  group-hover:shadow-orange-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <CaseStudies />
      </div>
      <div className="">
        <FooterCtx />
      </div>
      <div className="mt-72 text-5xl text-orange-500 text-center flex justify-center">
         working on it 
      </div>
    </div>
  );
};

export default Index;

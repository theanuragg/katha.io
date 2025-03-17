
import Header from '../components/ui/Header'
import Card from "../components/ui/storycard";

export const Discover = () => {
  return (
    <>
      <div className="bg-bg">
        <div className=" h-screen">
          <div className="">
            <Header />
          </div>
          <div className="flex items-center justify-center">
          <Card />
          </div>
        </div>
      </div>
    </>
  );
};

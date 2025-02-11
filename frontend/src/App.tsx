import Index from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Singup";
import { Discover } from "./pages/Discover";
import CreateStory from "./pages/CreateStory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<Signup/>}/>
          <Route path="/" element={<Index/>}/>
          <Route path="/createstory" element={<CreateStory/>}/>
          <Route path="/discover" element={<Discover/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import VideoUpload from "./pages/videoUpload/VideoUpload";


function App (){
return(
  <>

  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="upload" element={<VideoUpload />} />
      <Route path="videos/:videoId" element={<Home />} />
     </Routes>
     </BrowserRouter>
     </>
);
}
export default App;
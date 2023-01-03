import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import VideoUpload from "./pages/videoUpload/VideoUpload";
import Header from "./components/header/Header";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";



function App (){
return(
  <>
  
  <BrowserRouter>
  <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="videos" element={<VideoDetailsPage />} />
      <Route path="upload" element={<VideoUpload />} />
      <Route path="videos/:videoId" element={<VideoDetailsPage />} />
     </Routes>
     </BrowserRouter>
     </>
);
}
export default App;
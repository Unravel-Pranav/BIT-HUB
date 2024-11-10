import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import  UploadResourse  from "./pages/uploadfile/UploadFile";
import DependentDropdown from "./components/dumy"
import "./App.css";
import AboutUs from "./pages/aboutUs/AboutUs";
import Footer from "./components/Footer";
import ResultDisplay from "./pages/result_display/ResultDisplay";
import AddSubject from "./pages/uploadfile/addSubject";
import ManageCR from "./pages/Manage_CR/ManageCR";
import ManageStudentResources from "./pages/Student_Resource/ResourceStatus";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/resource" element={<ResultDisplay />} />
          <Route path="/uploadresourse" element={<UploadResourse />} />
          <Route path="/dependentdropdown" element={<DependentDropdown />} />
          <Route path="/addsubject" element={<AddSubject/>} />
          <Route path="/managecr" element={<ManageCR/>} />
          <Route path="/studentresource" element={<ManageStudentResources/>} />
        </Routes>
     <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

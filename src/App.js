import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseDirectoryPage from "./pages/CourseDirectoryPage";
import CourseDetailPage from './pages/CourseDetailPage';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<CourseDirectoryPage />} />
        <Route path="directory/:courseId" element={<CourseDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

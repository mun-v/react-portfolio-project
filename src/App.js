import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CoursesList from "./features/courses/CoursesList";
import CourseDirectoryPage from './pages/CourseDirectoryPage';

function App() {
  return (
    <div className="App">
        <Header />
        <CourseDirectoryPage />
        <Footer />
    </div>
  );
}

export default App;

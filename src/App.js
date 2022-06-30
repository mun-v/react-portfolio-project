import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CoursesList from "./features/courses/CoursesList";

function App() {
  return (
    <div className="App">
        <Header />
        <CoursesList />
        <Footer />
    </div>
  );
}

export default App;

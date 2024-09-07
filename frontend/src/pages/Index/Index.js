import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LastArticles from "../../Components/LastArticles/LastArticles";
import LastCourses from "../../Components/LastCourses/LastCourses";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import PresellCourses from "../../Components/PresellCourses/PresellCourses";

import "./Index.css";

export default function Index() {
  return (
    <>
      <Header />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticles />
      <Footer />
    </>
  );
}

import React from "react";
import Header from "../../Components/Header/Header";
import LastCourses from "../../Components/LastCourses/LastCourses";
import AboutUs from "../../Components/AboutUs/AboutUs";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import LastArticles from "../../Components/LastArticles/LastArticles";
import PresellCourses from "../../Components/PresellCourses/PresellCourses";
import Footer from "../../Components/Footer/Footer";

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

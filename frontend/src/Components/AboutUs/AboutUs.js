import React from "react";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
import SectionHeader from "./../SectionHeader/SectionHeader";

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div class="about-us">
      <div class="container">
        <SectionHeader
          title="ما چه کمکی بهتون میکنیم؟"
          desc="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
        />

        <div class="container">
          <div class="row">
              <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" />
              <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" />
              <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" />
              <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" />
          </div>
        </div>
      </div>
    </div>
  );
}

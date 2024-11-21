import React from "react";

import "./principal.css";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";

const Page = () => (
  <>  
    <Hero/>
    <Services/>
    <Offers/>
  </>
);

export default Page;
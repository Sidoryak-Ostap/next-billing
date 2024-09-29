import React from "react";

import "./page.css";

import Header from "./components/Header/Header";
import BillingCard from "./components/BillingCard/BillingCard";

const page = () => {
  return (
    <div className="wrapper">
      <main className="container">
        <div className="bg-element-1"></div>
        <Header />
        <BillingCard />
      </main>
    </div>
  );
};

export default page;

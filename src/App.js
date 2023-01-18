import React, { Component } from "react";
import Banner from "./components/Banner";
import BlockChainBank from "./components/BlockChainBank";
import FamilayAdvisor from "./components/FamilayAdvisor";
// import Brands from './components/Brands';
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Legal from "./components/Legal";
import Services from "./components/Services";
import WhatWeDo from "./components/WhatWeDo";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        {/* <Brands /> */}
        <WhatWeDo />
        <Services />
        <Features />
        <BlockChainBank />
        <FamilayAdvisor />
        <Legal />
        <Footer />
      </>
    );
  }
}

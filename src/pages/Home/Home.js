import React from "react";
import Announcement from "components/Announcement";
import Footer from "components/Footer";
import NavBar from "components/Navbar";
import Products from "components/Products/Products";

function Home() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;

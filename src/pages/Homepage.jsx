import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
      <Link to="/app">Go to app</Link>
    </div>
  );
}

export default Homepage;
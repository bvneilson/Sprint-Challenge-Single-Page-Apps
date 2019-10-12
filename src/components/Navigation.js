import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav">
      <Link to={"/"} className="link">Home</Link>
      <Link to={"/characters"} className="link">Characters</Link>
    </div>
  )
}

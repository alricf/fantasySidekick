import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <>
    <ul className="flex justify-center space-x-5">
      <li className="border-black border-2 bg-sky-400 px-2">
        <Link to="/">Home</Link>
      </li>
      <li className="border-black border-2 bg-sky-400 px-2">Chart</li>
      <li className="border-black border-2 bg-sky-400 px-2">Top 100 Stats</li>
      <li className="border-black border-2 bg-sky-400 px-2">Mini-League Stats</li>
    </ul>
    </>
  );
};
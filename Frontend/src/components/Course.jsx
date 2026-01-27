import React from "react";
import list from "../data/list.json";
import Cards from "./Cards";
import {Link} from "react-router-dom";
function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:py-10 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
          Explore our wide range of courses and start your learning journey today. Books have the power to inspire, teach, and transport us into new worlds. This course is built around that inspiration, showing how a simple idea can become a beautiful digital bookstore. Through thoughtful design and user-friendly interfaces, learners bring stories closer to readers. Every page is crafted to celebrate the joy of reading and discovery.
        </p>
        <Link to="/">
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
          Back
        </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  );
}


export default Course;
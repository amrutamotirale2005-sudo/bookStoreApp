import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";    

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch("http://localhost:4001/book");
        const data = await res.json();   
        console.log(res.data);               
        setBook(res.data);                  
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:py-10 px-4">
        <div className="mt-28 text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">(Here! :)</span>
          </h1>

          <p className="mt-12">
            Explore our wide range of courses and start your learning journey today.
          </p>

          <Link to="/">
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;

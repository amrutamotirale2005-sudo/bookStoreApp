import React from 'react'
import Cards from './Cards'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
function Course() {
  const [books, setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res = await axios.get('http://localhost:4001/books');
        console.log(res.data)
        setBook(res.data)
      }catch(error){
          console.log(error)
      }
    }
    getBook();
  },[]);
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We're delighted to have you{" "}
            <span className="text-blue-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Explore our wide range of courses and start your learning journey today.
          </p>
          <Link to='/'>
            <button className='mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300'>Back</button>
          </Link>
          
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
          {
            books.map((item)=>(
              <Cards key={item._id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
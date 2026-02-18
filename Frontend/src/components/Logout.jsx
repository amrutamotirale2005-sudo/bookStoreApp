import React from 'react';
import { useAuth } from "../context/AuthProvider.jsx";
import { toast } from 'react-hot-toast';
import { set } from 'react-hook-form';

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try{
      setAuthUser({
        ...authUser,
        user: null
      })
      localStorage.removeItem("Users");
      toast.success("Logout successful!");
      
      setTimeout(() => {
        window.location.reload(); // Refresh the page to update the UI
      }, 3000);
    }catch(err){
      toast.error("Logout failed. Please try again.");
      setTimeout(() => {}, 2000);
  }
}
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout 

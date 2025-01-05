import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  // const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div class="container">
       {/* <marquee behavior="alternate" direction="rigth"> */}
       {/* <h1 class="text-info" >Welcome {userData?.name || "User"}!</h1> */}
       {/* </marquee> */}
       <h1 class="text-info text-center">Welcome Back!</h1>
       <Link to='/profile/add-new-file' class="btn btn-success m-3">Add New Application</Link>
    </div>
  );
};

export default Profile;

import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  }

  return (
    <>
     <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-2"></div>
            <div className="col-lg-8 col-md-8 col-8">
              <div className="head text-center py-5">
                 <h2>HOME PAGE</h2>
                 <p className="mt-5">Welcome - {userName.name}</p>
              </div>
               <button
               onClick={handleLogout} 
               type="button" className="btn btn-danger">Logout</button>
            </div>
            <div className="col-lg-2 col-md-2 col-2"></div>
          </div>
        </div>
     </section>
    </>
  );
}

export default Home;
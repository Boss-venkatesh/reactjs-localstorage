import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) =>{
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));

    if( input.email === loggeduser.email && 
      input.password  === loggeduser.password 
      ){
        localStorage.setItem("loggedin", true);
        navigate("/");
      }
      else{
        alert("Wrong Email Or Password");
      }
  };

  return (
    <>
      <section id="login">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-2"></div>
            <div className="col-lg-8 col-md-8 col-8 inner outer">
              <h2 className="text-center">login</h2>

              <form onSubmit={handleLogin}>
                
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                   name="email"
                   value={input.email}
                   onChange={ (e) => setInput({...input,[e.target.name] : e.target.value,})}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                   name="password"
                   value={input.password}
                   onChange={ (e) => setInput({...input,[e.target.name] : e.target.value,})}
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" class="btn btn-success px-2 py-2 w-100">
                    Submit
                  </button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  Don't have a account?
                  <Link to="/register" className="fw-bold text-body"><u>Registration</u></Link>
                  </p>
              </form>
            </div>
            <div className="col-lg-2 col-md-2 col-2"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
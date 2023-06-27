import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Login from "./Login";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // to storage value in localstorage
  const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  }
  return (
    <>
      <section id="register">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-2"></div>
            <div className="col-lg-8 col-md-8 col-8 inner outer">
              <h2 className="text-center">Create An Account</h2>

              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="exampleInputname">Your Name</label>
                  <input
                    name="name"
                    value={input.name}
                    onChange={ (e) => setInput({...input,[e.target.name] : e.target.value,})}
                    type="text"
                    class="form-control"
                    id="exampleInputName"
                    aria-describedby="nameHelp"
                  />
                </div>
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
                  <button type="submit" class="btn btn-primary px-2 py-2 w-100">
                    Submit
                  </button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?
                  <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link>
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

export default Register;

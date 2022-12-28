import React, { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../Components";
import "./Auth.css";
import { useAuth } from "../../Context/auth";
import { signupFormReducer } from "../../reducers";
import { signup } from "../../services/auth/auth";

function Signup() {
  const [state, dispatch] = useReducer(signupFormReducer, {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [togglePassword, setTogglePassword] = useState(false);
  const { email, firstName, lastName, password, confirmPassword } = state;
  const [error, setError] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signup(email, firstName, lastName, password);
      const { createdUser, encodedToken } = data;
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", encodedToken);
      setUser(createdUser);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Something went wrong😞");
    }
  };

  const handleChange = (e) => {
    dispatch({
      type: "SET_INFO",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <main className="center-div mt-2">
      <div className="card auth-card card-shadow m-1">
        <div className="card-section">
          <div className="card-header p-2">
            <h3 className="center-div">Signup</h3>
            <form onSubmit={signupHandler}>
              <div className="form-group my-2">
                <Input
                  label="Email address"
                  type="email"
                  class_name="input-textbox p-1"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  changeHandler={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="First Name"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter first name"
                  name="firstName"
                  value={firstName}
                  changeHandler={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="Last Name"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter last name"
                  name="lastName"
                  value={lastName}
                  changeHandler={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="Password"
                  type={togglePassword ? "text" : "password"}
                  class_name="input-textbox p-1"
                  placeholder="Password"
                  name="password"
                  value={password}
                  changeHandler={handleChange}
                  required={true}
                />
                <span
                  className="show-password"
                  onClick={() => setTogglePassword((prevState) => !prevState)}
                >
                  {togglePassword ? (
                    <i className="fas fa-eye"></i>
                  ) : (
                    <i className="fas fa-eye-slash"></i>
                  )}
                </span>
              </div>
              <div className="form-group my-2">
                <Input
                  label="Confirm Password"
                  type="password"
                  class_name="input-textbox p-1"
                  placeholder="Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  changeHandler={handleChange}
                  required={true}
                />
              </div>
              {confirmPassword.length > 0 && password !== confirmPassword && (
                <span className="input-err py-1">password not matching</span>
              )}

              {error && <span className="input-err p-1">{error}</span>}
              <button type="submit" className="btn btn-primary">
                Create new account
              </button>
            </form>

            <Link to="/login" className="btn-link center-div">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;

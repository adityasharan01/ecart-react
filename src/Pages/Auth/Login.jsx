import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "../../Components";
import { useAuth } from "../../Context/auth";
import { useCart } from "../../Context/cart";
import { useWishlist } from "../../Context/wishlist";
import { login } from "../../services/auth/auth";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useAuth();
  const { cartDispatch } = useCart();
  const { dispatch } = useWishlist();
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(email, password);
      const { foundUser, encodedToken } = data;
      setUser(foundUser);
      cartDispatch({ type: "INIT_CART", payload: foundUser?.cart });
      dispatch({ type: "INIT_WISHLIST", payload: foundUser?.wishlist });
      localStorage.setItem("token", encodedToken);
      navigate(location.state?.from?.pathname || "/");
    } catch (error) {
      console.error(error);
      setError("Something went wrong😞");
    }
  };

  const setDummyUserHandler = () => {
    setEmail("johndoe@gmail.com");
    setPassword("johnDoe123");
  };

  return (
    <main className="center-div">
      <div className="card card-shadow m-1">
        <div className="card-section">
          <div className="card-header p-2">
            <h3 className="center-div">Login</h3>
            <form onSubmit={loginHandler}>
              <div className="form-group my-2">
                <Input
                  label="Email address"
                  type="email"
                  class_name="input-textbox p-1"
                  placeholder="Enter email"
                  value={email}
                  changeHandler={(e) => setEmail(e.target.value)}
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="Password"
                  type={togglePassword ? "text" : "password"}
                  class_name="input-textbox p-1"
                  placeholder="Password"
                  value={password}
                  changeHandler={(e) => setPassword(e.target.value)}
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
              {error && <span className="input-err p-1">{error}</span>}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={setDummyUserHandler}
              >
                Login with dummy user
              </button>
            </form>
            <Link to="/signup" className="btn-link center-div">
              Create new account <i className="fas fa-arrow-right px-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../Components";
import { useAuth } from "../../Context/auth";
import "./Profile.css";

function Profile() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="px-2">
      <Nav />
      <main className="center-div">
        <div className="card card-shadow m-1">
          <div className="card-section">
            <div className="card-header p-2">
              <h3 className="center-div">Profile</h3>
              <div className="card-logo center-div py-3">
                <i className="far fa-user-circle"></i>
              </div>
              <h4 className="center-div">{`${user?.firstName} ${user?.lastName}`}</h4>
            </div>
            <button className="btn btn-primary" onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;

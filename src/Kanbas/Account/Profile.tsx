

import { Link , useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input id="wd-username" value="alice" placeholder="username"
             className="form-control mb-2"/>
      <input id="wd-password" value="alice"
             placeholder="password" type="password"
             className="form-control mb-2"/>
      <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control mb-2" />
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control mb-2" />
      <input id="wd-dob" value="2000-01-01" type="date" className="form-control mb-2"/>
      <input id="wd-email" value="alice@wonderland" type="email" className="form-control mb-2"/>
      <select id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link id="wd-signin-btn"
            to="/Kanbas/Account/Signin"
            className="btn btn-danger w-100">
            Sign Out </Link>
      
    </div>
    
    
);}
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="col-md-4 col-12">
      <div className="form-group">
        <h1>Signup</h1>
        {error && <div>{error}</div>}
        <input placeholder="username"
          className="form-control mb-2"
          value={user.username}
          onChange={(e) =>
            setUser({
              ...user,
              username: e.target.value,
            })
          }
        />
        <input placeholder="password"
          className="form-control mb-2"
          value={user.password}
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />
        <button className="form-control btn btn-primary" onClick={signup}> Signup </button>
      </div>
    </div>
  );
}
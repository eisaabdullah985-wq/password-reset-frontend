import React from 'react'
import API_BASE_URL from "../utils/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/welcome`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          localStorage.removeItem("token");
          navigate("/");
          return;
        }

        setUser(data.user);

      } catch (err) {
        setError("Something went wrong");
      }
    };

    fetchUser();
  }, [navigate]);

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  if (!user) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container text-center mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-3">Welcome {user.name} 🎉</h2>
        <p className="lead">
          You have successfully logged in.
        </p>

        <p className="text-muted">
          This is a protected page visible only to authenticated users.
        </p>
        <button
          className="btn btn-danger mt-3"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

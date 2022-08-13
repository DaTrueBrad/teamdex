import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Team() {
  const [teams, setTeams] = useState([]);
  const [validUser, setValidUser] = useState(true)
  const [cookies, setCookie, removeCookie] = useCookies(["userID", "username"]);
  const navigate = useNavigate();
  const newTeam = () => navigate("/teams/new");

  const displayTeams = teams.map((team, index) => {
    return (
      <div>
        <h3>{team.name}</h3>
        <p>{team.notes}</p>
        <button
          className="md-btn"
          onClick={() => navigate(`/myTeam/${team.id}`)}
        >
          View
        </button>
      </div>
    );
  });

  useEffect(() => {
    let id = cookies.userID;
    if (id) {
      axios.get(`/api/myTeams/${id}`).then((res) => {
        setTeams(res.data.reverse());
      });
    } else {
      setValidUser(false)
    }
  }, []);
  if(validUser) {
    return (
      <div>
        <h1>Teams</h1>
        <button className="lg-btn" onClick={newTeam}>
          Create new Team
        </button>
        <h2>My Teams</h2>
        {displayTeams}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Teams</h1>
        <h2>Please sign in to make changes to your teams :)</h2>
        <Link to="/login"><button className="lg-btn">Go To Sign In</button></Link>
      </div>
    )
  }
}

export default Team;

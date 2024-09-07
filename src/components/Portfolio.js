import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = ({ username }) => {
  const [portfolio, setPortfolio] = useState(null);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    axios.get(`http://your-backend-api-url/portfolio/${username}`)
      .then(response => {
        setPortfolio(response.data);
        setVisibility(response.data.isPublic);
      })
      .catch(error => {
        console.error("Error fetching portfolio:", error);
      });
  }, [username]);

  const toggleVisibility = () => {
    axios.post(`http://your-backend-api-url/toggle-visibility/${username}`)
      .then(response => {
        setVisibility(!visibility);
      })
      .catch(error => {
        console.error("Error toggling visibility:", error);
      });
  };

  return (
    <div>
      {portfolio ? (
        <div>
          <h1>Portfolio of {username}</h1>
          <pre>{JSON.stringify(portfolio, null, 2)}</pre>
          <button onClick={toggleVisibility}>
            {visibility ? 'Make Private' : 'Make Public'}
          </button>
        </div>
      ) : (
        <p>Loading portfolio...</p>
      )}
    </div>
  );
};

export default Portfolio;

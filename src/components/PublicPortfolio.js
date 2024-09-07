import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PublicPortfolio = ({ username }) => {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    axios.get(`http://your-backend-api-url/portfolio/${username}`)
      .then(response => {
        setPortfolio(response.data);
      })
      .catch(error => {
        console.error("Error fetching portfolio:", error);
      });
  }, [username]);

  return (
    <div>
      {portfolio ? (
        <div>
          <h1>Public Portfolio of {username}</h1>
          <pre>{JSON.stringify(portfolio, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading portfolio...</p>
      )}
    </div>
  );
};

export default PublicPortfolio;

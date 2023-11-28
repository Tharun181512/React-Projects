import React, { useState } from 'react';
import axios from 'axios';

const GitHubUserSearch = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUserData(null);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {userData && (
        <div>
          <h2>User Information</h2>
          <p>
            <strong>Username:</strong> {userData.login}
          </p>
          <p>
            <strong>Name:</strong> {userData.name || 'N/A'}
          </p>
          <p>
            <strong>Followers:</strong> {userData.followers}
          </p>
          <p>
            <strong>Following:</strong> {userData.following}
          </p>
          <p>
            <strong>Public Repositories:</strong> {userData.public_repos}
          </p>
        </div>
      )}
    </div>
  );
};

export default GitHubUserSearch;

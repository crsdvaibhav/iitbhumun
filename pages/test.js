import React, { useEffect, useState } from 'react';

export default function Test() {
  const [users, setUsers] = useState([]); // State to store the fetched users
  const [loading, setLoading] = useState(true); // Loading state for the API call
  const [error, setError] = useState(null); // Error state in case of failed API call

  useEffect(() => {
    // Make the API call when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data); // Set the fetched users into state
      } catch (err) {
        setError(err.message); // Set error message if the API call fails
      } finally {
        setLoading(false); // Set loading to false once the API call is complete
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run only once when the component mounts

  // Conditional rendering based on loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

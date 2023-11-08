import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Auth=() => {
  const [data, setData] = useState(null);
  const accessToken = localStorage.getItem('access_token');
  console.log("hello")
  console.log(accessToken)
  useEffect(() => {
    if (accessToken) {
      axios.get('http://localhost:5001/protected', {
        headers: {
          Authorization: `${accessToken}`,
        },
      })
        .then((response) => {
          console.log("hi")
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
          console.log("hik")
        });
    }
  }, [accessToken]);

  return (
    <div>
      {accessToken ? (
        <div>
          <p>Welcome! You are authenticated.</p>
          <p>Protected data: {data ? JSON.stringify(data) : 'Loading...'}</p>
        </div>
      ) : (
        <div>
          <p>Please log in to access this content.</p>
          {/* Add your login form or authentication flow here */}
        </div>
      )}
    </div>
  );
}

export default Auth;

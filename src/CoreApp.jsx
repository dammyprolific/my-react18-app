import React, { useEffect,useState }from 'react';
import axios from 'axios';

function CoreApp() {
    const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://localhost:8080/api/hello')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the message!', error);
      });
  }, []);
  return (
    <div>
      <h1>React + Django App</h1>
      <p>{message}</p>
    </div>
  )
}

export default CoreApp

function handleButtonClick() {
    // Make an HTTP request to your backend
    fetch('/api/endpoint', {
      method: 'GET', // You can change this to POST, PUT, etc., depending on your backend API
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend
        console.log(data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  }
  
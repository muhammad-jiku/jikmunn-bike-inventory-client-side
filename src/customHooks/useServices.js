import axios from 'axios';

const { useState, useEffect } = require('react');

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/services`;
    axios
      .get(url)
      .then((data) => {
        // console.log(data);
        setServices(data?.data);
      })
      .catch((err) => {
        // console.log( err )
      });
  }, []);

  return [services];
};

export default useServices;

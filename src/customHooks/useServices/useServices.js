import axios from 'axios';

const { useState, useEffect } = require('react');

const useServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = 'https://cryptic-reef-07381.herokuapp.com/services';
    // fetch('https://cryptic-reef-07381.herokuapp.com/services')
    // .then((res) => res.json())
    axios
      .get(url)
      .then((data) => {
        console.log(data);
        setServices(data?.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });

  return [services, isLoading];
};

export default useServices;

import axios from 'axios';
import { useEffect, useState } from 'react';

const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/testimonials`;
    axios
      .get(url)
      .then((data) => {
        // console.log(data);
        setTestimonials(data?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log( err )
      });
  }, []);

  return [testimonials, isLoading];
};

export default useTestimonials;

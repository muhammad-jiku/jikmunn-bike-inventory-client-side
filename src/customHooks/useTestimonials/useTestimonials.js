import axios from 'axios';
import { useEffect, useState } from 'react';

const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = 'https://cryptic-reef-07381.herokuapp.com/testimonials';
    // fetch('https://cryptic-reef-07381.herokuapp.com/testimonials')
    //   .then((res) => res.json())
    axios
      .get(url)
      .then((data) => {
        console.log(data);
        setTestimonials(data?.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return [testimonials, isLoading];
};

export default useTestimonials;

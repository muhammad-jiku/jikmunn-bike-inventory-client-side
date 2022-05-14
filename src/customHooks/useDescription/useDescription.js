import axios from 'axios';
import { useEffect, useState } from 'react';

const useDescription = () => {
  const [pics, setPics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = 'https://cryptic-reef-07381.herokuapp.com/images';
    // fetch('https://cryptic-reef-07381.herokuapp.com/images')
    // .then((res) => res.json())
    axios
      .get(url)
      .then((data) => {
        console.log(data);
        setPics(data?.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });

  return [pics, isLoading];
};

export default useDescription;

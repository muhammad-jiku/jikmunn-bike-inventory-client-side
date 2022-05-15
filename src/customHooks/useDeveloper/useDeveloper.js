import axios from 'axios';
import { useEffect, useState } from 'react';

const useDeveloper = () => {
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = 'https://cryptic-reef-07381.herokuapp.com/mycollections';
    axios
      .get(url)
      .then((data) => {
        // console.log(data);
        setCollection(data?.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return [collection, isLoading];
};

export default useDeveloper;

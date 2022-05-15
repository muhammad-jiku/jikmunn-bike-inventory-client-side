import axios from 'axios';
import { useEffect, useState } from 'react';

const useDescription = () => {
  const [pics, setPics] = useState([]);
  useEffect(() => {
    const url = 'https://cryptic-reef-07381.herokuapp.com/images';
    axios
      .get(url)
      .then((data) => {
        // console.log(data);
        setPics(data?.data);
      })
      .catch((err) => console.log(err));
  });

  return [pics];
};

export default useDescription;

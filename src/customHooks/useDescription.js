import axios from 'axios';
import { useEffect, useState } from 'react';

const useDescription = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/images`;
    axios
      .get(url)
      .then((data) => {
        // console.log(data);
        setBrands(data?.data);
      })
      .catch((err) => {
        // console.log( err )
      });
  }, []);

  return [brands];
};

export default useDescription;

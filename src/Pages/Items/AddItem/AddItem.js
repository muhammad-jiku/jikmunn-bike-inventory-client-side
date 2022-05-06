import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/bikeinventory`;
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    axios
      .post(url, data)
      // .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const { data } = result;
        console.log(data);
        if (data?.insertedId) {
          alert('You just add an inventory item');
          reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <h1>Add the item to list</h1>
      <div className="w-75 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
          <input
            className="mb-2"
            placeholder=" Brand Name"
            {...register('brand', { required: true, maxLength: 20 })}
          />
          <input
            className="mb-2"
            placeholder=" Model Name"
            {...register('name', { required: true, maxLength: 20 })}
          />
          <input
            className="mb-2"
            placeholder="Quantity"
            type="number"
            {...register('quantity', { required: true, min: 1 })}
          />
          <input
            className="mb-2"
            placeholder="Price"
            type="number"
            {...register('price', { required: true })}
          />
          <input
            className="mb-2"
            placeholder="Supplier"
            {...register('supplier', { required: true })}
          />
          <input
            className="mb-2"
            placeholder="Description"
            {...register('description', { required: true })}
          />
          <input
            className="mb-2"
            placeholder="Photo URL"
            {...register('image', { required: true })}
          />
          <input className="mb-2" type="submit" />
        </form>
      </div>
    </Container>
  );
};

export default AddItem;

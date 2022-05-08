import axios from 'axios';
import React from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
// import Loading from '../../Shared/Loading/Loading';

const AddBikeInventory = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, isValid },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://cryptic-reef-07381.herokuapp.com/bikeinventory`;
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

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <Container>
      {/* {loading ? (
        <Loading />
      ) : ( */}
        <>
          <h1>Add the item to list</h1>
          {!isValid && isSubmitted ? (
            <Alert variant="danger">
              {Object.values(errors).map((e, idx) => {
                return <p key={idx}>{e.message}</p>;
              })}
            </Alert>
          ) : (
            <Alert variant="success">Please fill in the form</Alert>
          )}
          <div className="w-75 mx-auto">
            <Form onSubmit={handleSubmit(onSubmit)} className="simpleForm">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="mb-2"
                  value={user?.email}
                  type="email"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Your email is not valid',
                    },
                  })}
                  readOnly
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  className="mb-2"
                  placeholder="Brand"
                  type="text"
                  {...register('brand', {
                    required: {
                      value: true,
                      message: 'Please add brand name',
                    },
                    maxLength: {
                      value: 10,
                      message: 'Your brand name must be included in 10 letters',
                    },
                  })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Model</Form.Label>
                <Form.Control
                  className="mb-2"
                  placeholder="Model"
                  type="text"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Please add model name',
                    },
                    maxLength: {
                      value: 30,
                      message: 'Your model name must be included in 30 letters',
                    },
                  })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  className="mb-2"
                  placeholder="Quantity"
                  type="number"
                  {...register('quantity', {
                    required: {
                      value: true,
                      message: 'Please add number of quantity',
                    },
                    min: {
                      value: 1,
                      message:
                        'Your number of model quantity must be at least 1',
                    },
                  })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  className="mb-2"
                  placeholder="Price"
                  type="number"
                  {...register('price', {
                    required: {
                      value: true,
                      message: 'Please add number of quantity',
                    },
                    min: {
                      value: 10000,
                      message: 'Price must be at least 10000tk',
                    },
                  })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Supplier</Form.Label>
                <Form.Control
                  className="mb-2"
                  placeholder="Supplier"
                  type="text"
                  {...register('supplier', {
                    required: {
                      value: true,
                      message: 'Please add supplier name',
                    },
                    minLength: {
                      value: 10,
                      message:
                        'Your supplier name at least included in 10 letters',
                    },
                  })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  className="mb-2"
                  placeholder="Description"
                  type="text"
                  {...register('description', {
                    required: {
                      value: true,
                      message: 'Please add model description',
                    },
                    maxLength: {
                      value: 250,
                      message:
                        'Your brand name must be included in 250 letters',
                    },
                  })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                  className="mb-2"
                  placeholder="Photo URL"
                  type="text"
                  {...register('image', {
                    required: {
                      value: true,
                      message: 'Please add image url',
                    },
                  })}
                />
              </Form.Group>
              <Button type="submit">Add Inventory</Button>
            </Form>
          </div>
        </>
      {/* )} */}
    </Container>
  );
};

export default AddBikeInventory;

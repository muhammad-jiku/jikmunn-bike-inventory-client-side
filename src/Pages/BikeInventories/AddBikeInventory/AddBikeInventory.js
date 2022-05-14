import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import Loading from '../../Shared/Loading/Loading';
import './AddInventory.css';

const AddBikeInventory = () => {
  const navigate = useNavigate('');
  const [validated, setValidated] = useState(false);

  const emailRef = useRef('');
  const brandRef = useRef('');
  const nameRef = useRef('');
  const quantityRef = useRef(0);
  const priceRef = useRef(0);
  const supplierRef = useRef('');
  const descriptionRef = useRef('');
  const imageUrlRef = useRef('');

  const [user, loading, error] = useAuthState(auth);

  const handleAddInventory = async (e) => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const brand = brandRef?.current?.value.toUpperCase();
    const name = nameRef?.current?.value.toUpperCase();
    const quantity = parseInt(quantityRef?.current?.value);
    const price = parseInt(priceRef?.current?.value);
    const supplier = supplierRef?.current?.value;

    const description = descriptionRef?.current?.value;
    const image = imageUrlRef?.current?.value;
    //
    // let data = {
    //   email,
    //   brand,
    //   name,
    //   quantity,
    //   price,
    //   supplier,
    //   description,
    //   image,
    // };
    // console.log(data);
    if (name?.length > 25) {
      toast.error('Model name can not be above 25 letters');
      return;
    }

    if (price === 1 || price < 10000) {
      toast.error('Price can not be less than 10000 tk');
      return;
    }

    if (supplier?.length > 25) {
      toast.error('Supplier name can not be above 25 letters');
      return;
    }

    if (description?.length < 100 || description?.length > 250) {
      toast.error('Description must be between 100 to 250 letters');
      return;
    }

    const url = `https://cryptic-reef-07381.herokuapp.com/bikeinventory`;
    if (
      name?.length < 25 &&
      price > 10000 &&
      supplier?.length < 25 &&
      description?.length <= 250
    ) {
      await axios
        .post(url, {
          email,
          brand,
          name,
          quantity,
          price,
          supplier,
          description,
          image,
        })
        .then((result) => {
          console.log(result);
          const { data } = result;
          console.log(data);
          if (data?.insertedId) {
            toast.success('You just add an inventory item');
            e.target.reset();
            navigate('/myinventories');
          }
        })
        .catch((err) => console.log(err));
    }
    setValidated(true);
  };

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <div className="addInventory">
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <h1 className="addInventoryHeading">Add inventory</h1>
      <div className="addInventoryDesign">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleAddInventory}
          className="addInventoryForm"
        >
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="mb-2"
              type="email"
              ref={emailRef}
              value={user?.email}
              readOnly
              required
            />
            <Form.Control.Feedback type="invalid">
              Email is not available
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              className="mb-2"
              type="text"
              ref={brandRef}
              placeholder="Brand"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please insert Brand name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Model</Form.Label>
            <Form.Control
              className="mb-2"
              type="text"
              ref={nameRef}
              placeholder="Model"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please insert model name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              className="mb-2"
              type="number"
              ref={quantityRef}
              placeholder="Quantity"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please insert quantity
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              className="mb-2"
              type="number"
              ref={priceRef}
              placeholder="Price"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please insert price
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              className="mb-2"
              type="text"
              ref={supplierRef}
              placeholder="Supplier"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please insert supplier
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              className="mb-2"
              type="text"
              ref={descriptionRef}
              placeholder="Description"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please insert description
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              className="mb-2"
              type="text"
              ref={imageUrlRef}
              placeholder="Photo URL"
              aria-required
              required
            />
            <Form.Control.Feedback type="invalid">
              Please insert image url
            </Form.Control.Feedback>
          </Form.Group>
          <button type="submit" className="addInventoryFormButton">
            Add Inventory
          </button>
        </Form>
        <div className=""></div>
      </div>
    </div>
  );
};

export default AddBikeInventory;

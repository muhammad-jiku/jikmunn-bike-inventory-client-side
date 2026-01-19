import { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import styles from './styles/addInventory.module.css';

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

  const [user] = useAuthState(auth);

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

    if (name?.length > 25) {
      toast.error('Model name can not be above 25 letters');
      return;
    }

    if (quantity < 1) {
      toast.error('At least add one item');
      return;
    }

    if (price === 1 || price < 10000) {
      toast.error('Price can not be less than 10000 tk');
      return;
    }

    if (!image?.length) {
      toast.error('Insert correct image url');
      return;
    }

    if (description?.length < 100 || description?.length > 250) {
      toast.error('Description must be between 100 to 250 letters');
      return;
    }

    if (description?.length < 100 || description?.length > 250) {
      toast.error('Description must be between 100 to 250 letters');
      return;
    }

    const url = `${process.env.REACT_APP_API_BASE_URL}/api/bikeinventories`;
    if (
      brand?.length > 2 &&
      name?.length < 25 &&
      quantity > 1 &&
      price > 10000 &&
      (supplier?.length > 10 || supplier?.length < 25) &&
      (description?.length > 100 || description?.length < 250) &&
      image?.length > 2
    ) {
      await axiosPrivate
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
          // console.log(result);
          const { data } = result;
          // console.log(data);
          if (data?.insertedId) {
            toast.success('You just add an inventory item');
            e.target.reset();
            navigate('/myinventories');
          }
        })
        .catch((err) => {
          // console.log(err);
          toast.error('Failed to add inventory item');
        });
    }
    setValidated(true);
  };

  return (
    <div className={styles.addInventory}>
      <h1 className={styles.addInventoryHeading}>Add inventory</h1>
      <div className={styles.addInventoryDesign}>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleAddInventory}
          className={styles.addInventoryForm}
        >
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              className='mb-2'
              type='email'
              ref={emailRef}
              value={user?.email}
              readOnly
              required
            />
            <Form.Control.Feedback type='invalid'>
              Email is not available
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              className='mb-2'
              type='text'
              ref={brandRef}
              placeholder='Brand'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please insert Brand name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Model</Form.Label>
            <Form.Control
              className='mb-2'
              type='text'
              ref={nameRef}
              placeholder='Model'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please insert model name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              className='mb-2'
              type='number'
              ref={quantityRef}
              placeholder='Quantity'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please insert quantity
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              className='mb-2'
              type='number'
              ref={priceRef}
              placeholder='Price'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please insert price
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              className='mb-2'
              type='text'
              ref={supplierRef}
              placeholder='Supplier'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please insert supplier
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              className='mb-2'
              type='text'
              ref={descriptionRef}
              placeholder='Description'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please insert description
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              className='mb-2'
              type='text'
              ref={imageUrlRef}
              placeholder='Photo URL'
              aria-required
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please insert image url
            </Form.Control.Feedback>
          </Form.Group>
          <button type='submit' className={styles.addInventoryFormButton}>
            Add Inventory
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AddBikeInventory;

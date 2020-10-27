import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addProduct } from '../../redux/actions/productActions';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    quantity: 0,
    technicalsheet: '',
    description: '',
    category: '',
    image1: '',
    image2: '',
    image3: '',
  });

  const {
    title,
    price,
    quantity,
    technicalsheet,
    description,
    category,
    image1,
    image2,
    image3,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData, history));
  };
  return (
    <Fragment>
      <h2 className='is-primary'> Create product</h2>
      <form onSubmit={onSubmit}>
        <div className='field'>
          <label className='label'>Title of Product</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='Title of Product'
              name='title'
              value={title}
              onChange={onChange}
            />
          </div>
        </div>

        <div className='field'>
          <label className='label'>Price (DT) </label>
          <div className='control has-icons-left '>
            <input
              className='input'
              type='number'
              placeholder='Price of your product'
              name='price'
              value={price}
              onChange={onChange}
            />
            <span className='icon is-small is-left'>
              <i class='fas fa-tag'></i>
            </span>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Quantity</label>
          <div className='control has-icons-left '>
            <input
              className='input'
              type='number'
              placeholder='Quantity'
              name='quantity'
              value={quantity}
              onChange={onChange}
            />
            <span className='icon is-small is-left'>
              <i class='fas fa-layer-group'></i>
            </span>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Technical sheet</label>
          <div className='control'>
            <textarea
              className='textarea'
              placeholder='Technical sheet'
              name='technicalsheet'
              value={technicalsheet}
              onChange={onChange}
            ></textarea>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Description</label>
          <div className='control'>
            <textarea
              className='textarea'
              placeholder='Description'
              name='description'
              value={description}
              onChange={onChange}
            ></textarea>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Category</label>
          <div className='control'>
            <div className='select'>
              <select name='category' value={category} onChange={onChange}>
                <option value='Afganistan'>Afghanistan</option>
                <option value='Albania'>Albania</option>
                <option value='Algeria'>Algeria</option>
                <option value='American Samoa'>American Samoa</option>
                <option value='Andorra'>Andorra</option>
                <option value='Angola'>Angola</option>
                <option value='Anguilla'>Anguilla</option>
                <option value='Antigua & Barbuda'>Antigua & Barbuda</option>
              </select>
            </div>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Image 1</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='url image 1 '
              name='image1'
              value={image1}
              onChange={onChange}
            />
          </div>
        </div>

        <div className='field'>
          <label className='label'>image2 </label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='url image 2 '
              name='image2'
              value={image2}
              onChange={onChange}
            />
          </div>
        </div>

        <div className='field'>
          <label className='label'>Image 3</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='url image 3'
              name='image3'
              value={image3}
              onChange={onChange}
            />
          </div>
        </div>

        <div className='field is-grouped'>
          <div className='control'>
            <button className='button is-link'>Submit</button>
          </div>
          <div className='control'>
            <button className='button is-link is-light'>Cancel</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default CreateProduct;

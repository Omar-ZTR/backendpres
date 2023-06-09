import React, { useState } from 'react';
import './demande.css';
import newRequest from '../../utils/newRequest';

const Demande = () => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [desc, setDesc] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const orderData = {
        fullName,
        emailAddress,
        desc,
        phoneNumber,
        date,
        address,
        city,
        service,
      };

      await newRequest.post('/orders/<gigId>', orderData);
      console.log('Order created:', orderData);

      // Reset the form or redirect to another page
      // based on your application's requirements
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div id='res_body'>
      <section className='res_container'>
        <header>Add Order</header>
        <form onSubmit={handleSubmit} className='form'>
          <div className='named'>
            <div className='input-box'>
              <label>Full Name</label>
              <input
                type='text'
                name='fullName'
                placeholder='Enter full name'
                required=''
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className='input-box'>
              <label>Email Address</label>
              <input
                type='text'
                name='emailAddress'
                placeholder='Enter email address'
                required=''
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
          </div>
          <div className='input-box'>
            <label>Description</label>
            <textarea
              name='desc'
              placeholder='Brief descriptions to introduce your service to customers'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className='named'>
            <div className='input-box'>
              <label>Phone Number</label>
              <input
                type='number'
                name='phoneNumber'
                placeholder='Enter phone number'
                required=''
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className='input-box'>
              <label>Date</label>
              <input
                type='date'
                name='date'
                placeholder='Enter date'
                required=''
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className='named'>
            <div className='input-box address'>
              <label>Address</label>
              <input
                type='text'
                name='address'
                placeholder='Enter street address'
                required=''
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className='input-box column'>
              <label>City</label>
              <div className='select-box'>
                <select
                  name='city'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value='sousse'>Sousse</option>
                  <option value='monastir'>Monastir</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          {/* Add the service input */}
          <div className='input-box'>
            <label>Service</label>
            <input
              type='text'
              name='service'
              placeholder='Enter service'
              required=''
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
          </div>
          <br />
          <button type='submit'>Send</button>
        </form>
      </section>
    </div>
  );
};

export default Demande;

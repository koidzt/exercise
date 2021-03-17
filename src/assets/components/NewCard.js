import { nanoid } from 'nanoid';
import React, { useState } from 'react';

function NewCard(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [profile, setProfile] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeProfile = (event) => {
    setProfile(event.target.value);
  };
  const addCard = () => {
    const newCard = {
      id: nanoid(),
      name,
      phone,
      profile,
    };
    const newData = [...props.dataLists, newCard];

    props.setDataLists(newData);
    props.toggleAddCard();
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
      <div
        style={{
          padding: '20px',
          border: '1px solid',
          position: 'absolute',
          zIndex: '1',
          backgroundColor: 'white',
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Name (Paul Smit)"
            onChange={handleChangeName}
            style={{ width: '200px', margin: '5px 10px' }}
          />
          <input
            type="text"
            placeholder="Phone (324-9863 x351)"
            onChange={handleChangePhone}
            style={{ width: '200px', margin: '5px 10px' }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Profile (http://lorempixel.com/640/480/transport)"
            onChange={handleChangeProfile}
            style={{ width: '600px', margin: '5px 10px' }}
          />
          <button onClick={addCard} style={{ margin: '5px' }}>
            Add
          </button>
          <button onClick={props.toggleAddCard} style={{ margin: '5px' }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewCard;

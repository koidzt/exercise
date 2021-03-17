import React, { useState } from 'react';

function NormalCard({ name, phone, profile }) {
  const [isCardClick, setIsCardClick] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(name);

  const changeBg = () => {
    if (!isCardClick) {
      setIsCardClick(true);
    } else {
      setIsEdit(true);
    }
  };

  const handleChangeName = (event) => {
    setText(event.target.value);
  };

  const confirmEdit = () => {
    setIsCardClick((status) => {
      setIsEdit(false);
      return false;
    });
  };

  return (
    <div
      style={{
        width: '350px',
        height: '320px',
        margin: '10px',
        boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px',
        backgroundColor: isCardClick ? 'lightBlue' : 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={changeBg}
    >
      <img alt={`${name} card`} src={profile} style={{ width: '85%', height: 'auto' }} />
      {isEdit ? (
        <div>
          <input value={text} type="text" onChange={handleChangeName} style={{ margin: '5px' }} />
          <button onClick={confirmEdit}>Edit</button>
        </div>
      ) : (
        <p style={{ margin: '5px' }}>Name : {text}</p>
      )}
      <p style={{ margin: '5px' }}>Phone : {phone}</p>
    </div>
  );
}

export default NormalCard;

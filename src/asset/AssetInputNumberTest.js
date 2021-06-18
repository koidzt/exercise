import React from 'react';

// Input type='text' ที่รองรับเฉพาะตัวเลข . หรือ ,

function AssetNumberTest({
  label,
  value,
  setValue,
  required,
  disabled,
  autoFocus,
  showWarningฺStyle,
  showWarningRequired,
}) {
  const showWarningฺ = showWarningฺStyle ? showWarningฺStyle : showWarningRequired;

  const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;

  const handleChange = (event) => {
    if (rx_live.test(event.target.value)) setValue(event.target.value);
  };

  return (
    <div className={showWarningฺ ? 'asset-input-row-box warning' : 'asset-input-row-box'}>
      <div className="label-space">
        {label && (
          <label htmlFor={`input-text-${label}`}>
            {label}
            {required && <span className="message-required">{' *'}</span>}
          </label>
        )}
      </div>
      <div className="input-space">
        <input
          id={`input-text-${label}`}
          className={showWarningฺ ? 'input-box warning' : 'input-box'}
          type="text"
          pattern="[+-]?\d+(?:[.,]\d+)?"
          value={value}
          placeholder={label}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          autoFocus={autoFocus}
        />
        {showWarningRequired ? (
          <small className="message-required">กรุณาใส่{label}</small>
        ) : (
          <small>
            <br />
          </small>
        )}
      </div>
    </div>
  );
}

export default AssetNumberTest;

import React from 'react';
import './AssetProductCard.css';

const tabStar = (rating) => {
  const starRate = [];
  for (let i = 0; i < 5; i++) {
    if (rating < i) {
      starRate.push(<i key={`star-no-${i}`} className="far fa-star"></i>);
    } else if (rating > i && rating < i + 0.5) {
      starRate.push(<i key={`star-no-${i}`} className="fas fa-star-half-alt"></i>);
    } else {
      starRate.push(<i key={`star-no-${i}`} className="fas fa-star"></i>);
    }
  }

  return starRate;
};

const salesAmountText = (salesAmount) => {
  let textAmount;
  if (salesAmount > 1000000) {
    textAmount = `${(salesAmount / 1000000).toFixed(1)} ล้าน`;
  } else if (salesAmount > 1000) {
    textAmount = `${(salesAmount / 1000).toFixed(1)} พัน`;
  } else {
    textAmount = `${salesAmount} `;
  }

  return textAmount;
};

function AssetProductCard() {
  // Mock Data
  const product = {
    picture:
      'https://res.cloudinary.com/dk0z4ums3/image/upload/v1507096761/attached_image_th/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%82%E0%B8%A2%E0%B8%8A%E0%B8%99%E0%B9%8C%E0%B8%94%E0%B8%B5-%E0%B9%86-%E0%B8%95%E0%B9%88-pobpad.jpg',
    name: 'มะม่วง',
    price: 150,
    unitPrice: 'ลูก',
    distance: 1.6,
    salesAmount: 128,
    amount: 500,
    favStatus: true,
    rating: 4.2,
    shopName: 'ฟาร์มแสนสุข',
  };
  const { picture, name, price, unitPrice, distance, salesAmount, amount, favStatus, rating, shopName } = product;

  // const { picture, name, price, unitPrice, distance, salesAmount, amount, favStatus, rating } = props.product;
  const star = tabStar(rating);

  return (
    <div className="product-card">
      <div className="img-product">
        <img className="product-photo" alt={name} src={picture} />
        {favStatus ? <i className="fav-icon icon fa fa-heart"></i> : <i className="fav-icon icon far fa-heart"></i>}
      </div>

      <div className="detail-product">
        <div className="product-name">
          <h5 className="product-name">{name}</h5>
          <i className="basket-icon fas fa-shopping-basket"></i>
        </div>

        <div className="product-price-distance">
          <div className="price">
            <h4 className="product-price">฿{price}</h4>
            <h5 className="unit-price">/{unitPrice}</h5>
          </div>
          <div className="distance">
            <i className="pin-loc-icon fas fa-map-marker-alt"></i>
            <h6 className="distance-shop"> {distance} กม.</h6>
          </div>
        </div>

        <div className="product-sales">
          <div className="star-rate">{/* {star.map((el) => el)} */}</div>
          <h6 className="amount-sales">
            ขายแล้ว {salesAmountText(salesAmount)}
            {unitPrice}
          </h6>
        </div>

        <div className="product-progress">
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${(salesAmount * 100) / amount}%` }}
              aria-valuenow={(salesAmount * 100) / amount}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetProductCard;

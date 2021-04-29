import './App.css';
import AssetProductCard from './components/AssetProductCard/AssetProductCard';
import AssetRecommendCard from './components/AssetRecommendCard/AssetRecommendCard';

function App() {
  // Mock Data
  const products = [
    {
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
    },
    {
      picture: 'https://cdn.chiangmainews.co.th/wp-content/uploads/2016/09/07154331/B6-3.jpg',
      name: 'ส้มโอ',
      price: 150,
      unitPrice: 'ลูก',
      distance: 1.6,
      salesAmount: 7750,
      amount: 10000,
      favStatus: true,
      rating: 4.2,
      shopName: 'ฟาร์มสุขสบาย',
    },
  ];
  return (
    <div className="container">
      <div className="col-12">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3 col-6">
                <AssetProductCard product={product} />
              </div>
            );
          })}
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3 col-6">
                <AssetRecommendCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

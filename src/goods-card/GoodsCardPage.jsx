import iphones from '../common-components/data';
import { useParams } from 'react-router-dom';
import './GoodsCardPage.css';
import ProductInfo from '../common-components/product-info/ProductInfo.jsx';
import Button from '../common-components/button/Button';
import StarRating from './star-rating/StarRating.jsx';
import { addToCart } from '../common-components/localStorageManagement.js';
import Header from '../common-components/header/Header.jsx';

export default function GoodsCard() {
  const { id } = useParams();
  const selectedIphone = iphones.find((iphone) => iphone.id === parseInt(id));

  const handleStarClick = (clickedIndex) => {
    selectedIphone.rating = clickedIndex;
  };

  function addToCartHandler(iphoneId) {
    addToCart(iphoneId, 1);
  }

  return (
    <>
      <Header></Header>
      <div>
        <div className="goods-card">
          <div className="general-info">
            <img
              src={'../../' + selectedIphone.img}
              width="30%"
              alt="* Iphone image *"
              style={{ borderRadius: '20px' }}
            />
            <div className="name-price">
              <ProductInfo fontSize="40px" fontWeight="bold">
                {selectedIphone.name}
              </ProductInfo>
              <ProductInfo fontSize="30px" fontWeight="bold">
                {selectedIphone.price + ' руб.'}
              </ProductInfo>
              <Button
                onClickFunctionHandler={() =>
                  addToCartHandler(selectedIphone.id)
                }
              >
                В корзину
              </Button>
              <StarRating
                rating={selectedIphone.rating}
                onStarClick={handleStarClick}
              />
            </div>
          </div>

          <div className="features">
            <div className="feature">
              <ProductInfo fontSize="25px">
                {selectedIphone.description}
              </ProductInfo>
            </div>
            {selectedIphone.features.map((feature, index) => (
              <div key={index} className="feature">
                <ProductInfo fontSize="20px" fontWeight="bold">
                  {feature[0] + ': '}
                </ProductInfo>
                <ProductInfo fontSize="20px">{feature[1]}</ProductInfo>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

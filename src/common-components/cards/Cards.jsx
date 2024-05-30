import Card from '../card/Card.jsx';
import Image from '../image/Image.jsx';
import ProductInfo from '../product-info/ProductInfo.jsx';
import Button from '../button/Button.jsx';
import iphones from '../../common-components/data.js';
import { addToCart } from '../../common-components/localStorageManagement.js';
import './Cards.css';

export default function Cards() {
  const allCards = [];

  function addToCartHandler(iphoneId) {
    addToCart(iphoneId, 1);
  }

  function renderGoods() {
    iphones.forEach((iphone) => {
      allCards.push(
        <Card id={iphone.id} key={iphone.id}>
          <Image
            imageRef={iphone.img}
            path="/goods-card"
            param={iphone.id}
          ></Image>
          <ProductInfo fontSize="15px" fontWeight="bold">
            {iphone.name}
          </ProductInfo>
          <ProductInfo fontSize="15px">{iphone.price + ' руб.'}</ProductInfo>
          <Button onClickFunctionHandler={() => addToCartHandler(iphone.id)}>
            В корзину
          </Button>
        </Card>
      );
    });
  }

  renderGoods();

  return <div className="grid-container">{allCards}</div>;
}

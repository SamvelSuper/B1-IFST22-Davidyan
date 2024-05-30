import ProductInfo from '../product-info/ProductInfo.jsx';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const toShoppingCartPage = () => {
    const path = '/shopping-cart';
    navigate(path);
  };

  const toGoodsPage = () => {
    const path = '/';
    navigate(path);
  };

  return (
    <header>
      <p className="header-p" onClick={toGoodsPage}>
        Телефоны
      </p>
      <img
        className="header-img"
        src="../../../public/Basket.png"
        alt="Basket"
        height="50 px"
        onClick={toShoppingCartPage}
      />
    </header>
  );
}

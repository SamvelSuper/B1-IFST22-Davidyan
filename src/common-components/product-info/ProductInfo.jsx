import './ProductInfo.css';

export default function ProductInfo({ children, fontSize, fontWeight }) {
    return (
        <p className="product-info" style={{ fontFamily: 'Georgia, serif', fontSize: fontSize, fontWeight: fontWeight }}>{children}</p>
    );
}

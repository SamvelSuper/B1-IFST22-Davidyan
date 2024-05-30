import "./GoodsIcon.css"
import React from 'react';
import { useNavigate  } from 'react-router-dom';

export default function Image({ imageRef, path, param }) {
    const navigate = useNavigate();

    const handleClick = () => {
        const fullPath = param ? `${path}/${param}` : path;
        navigate(fullPath);
    };

    return (
        <div className="good-icon" onClick={handleClick}>
            <img src={imageRef} alt="*goods-image*" />
        </div>
    );
}
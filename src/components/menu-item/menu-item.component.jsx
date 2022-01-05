import React from "react";
import "./menu-item.styles.scss";


const MenuItem = ({title, imageUrl, size}) => (
    <div 
    className ={`menu-item--${size} menu-item`}
    >
        <div
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            className="menu-item__background-image"
        />
        <div className ='menu-item__content'>
            <h1 className ='title'>{title.toUpperCase()}</h1>
            <span className ='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;
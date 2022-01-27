import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";
// import { WithRouter } from 'react-router-dom';
//WithRouter is used to avoid prop drilling 
//it is a higher order component, a higher order component
//is essentially a function that takes a component as argument and returns a modified component
//so we gon power our menu item with to get acess to those entity location, match and history props
//related to router components only by doing WithRouter(MenuItem)




const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    let navigate =  useNavigate();
    return (
    <div 
    onClick={() => navigate(`${linkUrl}`)}
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
)};

export default MenuItem;
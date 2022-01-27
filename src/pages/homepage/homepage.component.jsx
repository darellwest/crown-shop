import React from 'react';
import Directory from '../../components/direcory-menu/directory.component';
import './homepage.styles.scss';


//prop tunnelling or prop drilling => module 5 video 4 timestamp 1:40m
//i dont think prop drilling still exists in react-router-dom v6

const HomePage = () => {
    return (<div className = 'homepage'>
        <Directory />
    </div>)
}



export default HomePage;
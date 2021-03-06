import React from 'react';
import Catagories from '../Catagories/Catagories';

const Home = (props) => {
    const {count} =props;
    return (
        <div style ={{border: '1px solid grey'}}>
            <h2>This is Home: {count}</h2>
            <Catagories count ={count}></Catagories>
        </div>
    );
};

export default Home;
import React from 'react';
import CategoryDetails from '../CatagoryDetails/CategoryDetails';

const Catagories = (props) => {
    const {count} =props;
    return (
        <div>
            <h2>select your category</h2>
            <CategoryDetails count ={count}></CategoryDetails>
        </div>
    );
};

export default Catagories;
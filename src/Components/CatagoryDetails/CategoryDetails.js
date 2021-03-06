import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const CategoryDetails = (props) => {
    const category = useContext(categoryContext);
    const {count} =props;
    return (
        <div>
            <h4>This is category details: {count}</h4>
            <h6>Selected category: {category}</h6>
        </div>
    );
};

export default CategoryDetails;
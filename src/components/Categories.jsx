import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, selectCategory } from '../store/slices/PizzasSlice';

const Categories = ({ items }) => {
    const category =useSelector(selectCategory);
    const dispatch=useDispatch();
    function dispatchCategory(a){
        dispatch(changeCategory(a))
    }
   const [selectItem,setSelectItem]=useState(null)
    return (
        <div className='categories'>
            <ul>
                <li onClick={e=>dispatchCategory(null)} className={category===null ? 'active': ''}>Все</li>

                {items.map((item,index) => (
                    <li onClick={e=>dispatchCategory(index)} className={category===index ? 'active': '' } key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;

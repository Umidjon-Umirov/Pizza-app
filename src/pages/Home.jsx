import React from 'react';
import Categories from '../components/Categories';
import SortModal from '../components/SortModal';
import PizzaBlock from '../components/PizzaBlock';
import PizzaLoader from '../components/PizzaLoader';
import { useSelector } from 'react-redux';
import { selectData, selectStatus } from '../store/slices/PizzasSlice';
const Home = () => {
   const categoriItems = [
      'Мясные',
      'Вегетарианская',
      'Гриль',
      'Острые',
      'Закрытые',
  ];
  const sortItems = ['популярности', 'цене'];
  const status=useSelector(selectStatus);
  const data=useSelector(selectData);
    return (
        <div className='container'>
            <div className='content__top'>
                <Categories items={categoriItems} />
                <SortModal sortItems={sortItems} />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
                {status === 'pending'
                    ? Array(10).fill(0).map((_,index)=><PizzaLoader key={index}/>)
                    : data.map((item, index) => (
                          <PizzaBlock key={index} {...item} />
                      ))}
            </div>
        </div>
    );
};

export default Home;

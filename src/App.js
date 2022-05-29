import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';

import {
    fetchPizzasData,
    selectCategory,
    selectSortName,
} from './store/slices/PizzasSlice';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { selectCount } from './store/slices/ChartSlice';
import EmptyChart from './components/EmptyChart';
function App() {
    const category = useSelector(selectCategory);
    const sortName = useSelector(selectSortName);
    const dispatch = useDispatch();
    const pizzaInChart = useSelector(selectCount);
    useEffect(() => {
        dispatch(fetchPizzasData({ category, sortName }));
    }, [category, sortName]);
    return (
        <div className='App'>
            <div className='wrapper'>
                <Header />
                <div className='content'>
                    <Routes>
                        <Route
                            path='https://Umidjon-Umirov.github.io/Pizza-app/chart'
                            element={pizzaInChart ? <Cart /> : <EmptyChart />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;

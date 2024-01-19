import React from 'react';
import ProductList from '../components/ProductList';
import ProductInput from '../components/ProductInput';

const Home = () => {
    return (
        <main className="py-16">
            <div className="productWrapper">

               <ProductList />

               <ProductInput />
            </div>
         </main>
    );
};

export default Home;
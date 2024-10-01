"use client"
import React, { useEffect } from 'react';
import { useProduct } from '@/contexts/Productcontext';


const ProductList: React.FC = () => {
    const { products, loading, error, getAllProducts } = useProduct();

    return (
        <div className='flex'>
            {products.map((product) => (
                <div key={product._id}>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <img src={product.image[0]} alt={product.name} />
                    {/* {product.image.map((item: string) => {
                        return (
                            <Image src={item} width={100} height={100} alt='image' />
                        )
                    })} */}
                </div>
            ))}
        </div>
    );
};

export default ProductList;

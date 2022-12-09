import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ data, isVerified }) => {

    const { id, name, sellingDate, sellerName, image, price, location, } = data;

    return (
        <div>
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img src={image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-md text-gray-700">{name}</h3>
            <p className="text-xs italic text-gray-500">{sellingDate}</p>
            <p className="text-sm text-gray-500">{"বিক্রেতার নামঃ " + sellerName}</p>
            <p className="text-sm text-gray-500">{"বিক্রয়ের স্থানঃ " + location}</p>
            <p className="mt-0 text-sm font-small text-gray-900">{"দামঃ " + price}</p>
            <div className='mt-1'>
                <button className={`btn rounded-md btn-wide btn-primary ${!isVerified ? `btn-disabled` : ' '}`}>কিনুন</button>
            </div>
        </div>
    );
};


export default Product;
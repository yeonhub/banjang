import React from 'react';
import { Link } from 'react-router-dom';

const HomeOrder = () => {
    return (
        <>
            <div className='homeOrderDiv'>
                <Link to='order'>
                    주문하러 가기
                </Link>
            </div>
        </>
    );
};

export default HomeOrder;
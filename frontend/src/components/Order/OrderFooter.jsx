import React from 'react';

const OrderFooter = () => {
    return (
        <>
            <div className='orderFooterDiv'>
                <div className='total'>
                    <div className='totalCount'>
                        <span>총 수량 : </span>
                        <span>0</span>
                        <span>개</span>
                    </div>
                    <div className='totalPrice'>
                        <span>총 가격 : </span>
                        <span>0</span>
                        <span>원</span>
                    </div>
                </div>
                <div className='orderBtn'>
                    <span className='orderBtnSpan'>
                        주문하기
                    </span>
                </div>
            </div>
        </>
    );
};

export default OrderFooter;
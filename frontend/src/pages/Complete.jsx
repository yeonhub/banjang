import React from 'react';
import '../assets/css/BJitemScss/CompleteScss.scss'

const Complete = () => {
    return (
        <div id='complete'>
            <img className='checkicon' src="./images/icon/CheckFilled.png" alt="checkicon" />
            <p className='completeP'>주문이 완료되었습니다.</p>
        </div>
    );
};

export default Complete;
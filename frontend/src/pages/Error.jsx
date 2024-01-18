import React from 'react';
import '../assets/css/BJitemScss/ErrorScss.scss'

const Error = () => {
    return (
        <div id='error'>
            <div className='errorDiv'>
                <p className='errorP'>주문에 실패하였습니다.</p>
                <p className='errorP'>다시 시도해주세요.</p>
            </div>
        </div>
    );
};

export default Error;
export const OrderFooterUI = ({ totalQuantity, totalPrice, handleOrder, isOrderLoading }) => (
    <div className='orderFooterDiv'>
        <div className='total'>
            <div className='totalCount'>
                <span>총 수량 : </span>
                <span>{totalQuantity}</span>
                <span>개</span>
            </div>
            <div className='totalPrice'>
                <span>총 가격 : </span>
                <span>{Number(totalPrice).toLocaleString()}</span>
                <span>원</span>
            </div>
        </div>
        <div
            className='orderBtn'
            style={totalQuantity > 0 ? (isOrderLoading ? { background: '#C1C1C1' } : { background: 'black' }) : null}
            onClick={totalQuantity > 0 ? handleOrder : null}
        >
            <span
                className='orderBtnSpan'
            >
                {isOrderLoading ? '주문 중...' : '주문하기'}
            </span>
        </div>
    </div>
);
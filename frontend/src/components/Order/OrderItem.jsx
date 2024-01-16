export const OrderItem = ({ item, onIncrement, onDecrement }) => (
    <li className='orderItemLi' key={item.id} style={item.stack > 0 ? { background: 'rgba(247, 90, 47, 0.1)' } : null}>
        <div className='itemImg'></div>
        <div className='itemInfo'>
            <div className='itemNameDiv'>
                <h2 className='itemName'>{item.name}</h2>
                {item.event ? <div className='itemEvent'>이벤트</div> : null}
            </div>
            <div className='itemPriceDiv'>
                <div className='itemCount'>
                    <span onClick={() => onDecrement(item.id)}>- </span>
                    <span>{item.stack}</span>
                    <span onClick={() => onIncrement(item.id)}> +</span>
                </div>
                <span className='itemPrice'>{Number(item.price).toLocaleString()}원</span>
            </div>
        </div>
    </li>
);
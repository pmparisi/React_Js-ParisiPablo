import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <>
            <div className='ListGroup' style={{display: 'flex', flexWrap: 'wrap'}}>
                {products.map(prod => <Item key={prod.id}{...prod}/>)}
            </div>
        </>
    )
}

export default ItemList
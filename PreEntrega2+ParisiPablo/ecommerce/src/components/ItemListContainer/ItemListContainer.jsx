import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? () => getProductsByCategory(categoryId) : getProducts

        asyncFunc()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <>
            
            <div className="d-flex justify-content-center" style={{marginTop:'10px', marginBottom: '10px', padding: '5px'}}>
                <h1>{greeting}</h1>
            </div>
            <div className="d-flex justify-content-center">
                <ItemList products={products}/>
            </div>
        </>
    );
}

export default ItemListContainer;
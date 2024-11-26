import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slice/ProductSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, setAmount } from "../redux/slice/BasketSlice"
import '../css/ProductDetails.css'

function ProductDetails() {

    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const dispatch = useDispatch();

    const { price, title, image, description } = selectedProduct;

    const [count, setCount] = useState(0);

    useEffect(() => {
        getProductById();

    },)

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }

    const inCreament = () => {
        setCount(count + 1);
    }
    const deCreament = () => {
        if (count > 0) setCount(count - 1);
    }
    const addBasket = () => {
        if (count > 0) {
            const payload =
            {
                id: +id,
                price,
                title,
                image,
                description,
                count,
            }
            dispatch(addToBasket(payload))
            dispatch(setAmount());
            setCount(0);

        }
    }


    return (
        <div className='bigCard'>
            <div className='leftCard'>
                <img src={image} />
            </div>
            <div className='rightCard'>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h1 className='productDetailsH1'> {price} $</h1>
                <div className='sectionIcon'>
                    <CiCircleMinus onClick={deCreament} className='icons' /><span className='icons'>{count}</span><CiCirclePlus onClick={inCreament} className='icons' />
                </div>
                <div>  <button onClick={addBasket} className='btn' >Sepete Ekle</button></div>
            </div>

        </div>
    )
}

export default ProductDetails
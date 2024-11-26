
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToBasket, setAmount } from '../redux/slice/BasketSlice';
import '../css/ProductList.css';


function Product({ product }) {



  const { id, price, title, image, description } = product;



  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addBasket = () => {

    const payload =
    {
      id,
      price,
      title,
      image,
      description,
      count: 1,
    }
    dispatch(addToBasket(payload))
    dispatch(setAmount());


  }

  return (
    <div className='cardBody'>

      <div className='img'>
        <img src={image} />
      </div>

      <div className='title'>
        <p> {title} </p>
        <h2> {price}$ </h2>

      </div>

      <div>
        <button onClick={() => navigate("/product-details/" + id)} className='btn'>Detaylar</button>
      </div>
      <div>
        <button onClick={addBasket} className='addBtn'>Sepete Ekle</button>
      </div>



    </div>
  )
}

export default Product
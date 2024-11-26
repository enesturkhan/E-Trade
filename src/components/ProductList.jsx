

























import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slice/ProductSlice';
import Product from './Product';
import '../css/ProductList.css'




function ProductList() {
  const dispatch = useDispatch();
  const { filterProducts } = useSelector((store) => store.product);




  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


  return (

    <div className='card' >
      {filterProducts.length > 0 ?

        (filterProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))) : (
          <p>Aradığınız ürün bulunamadı.</p>
        )

      }
    </div>

  )
}

export default ProductList  
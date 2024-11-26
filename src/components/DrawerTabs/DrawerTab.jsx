import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, setDrawer } from '../../redux/slice/BasketSlice';
import { useEffect } from 'react';
import { setAmount } from '../../redux/slice/BasketSlice';
import './DrawerTab.css'

function DrawerTab() {
  const { products, drawer, amount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setAmount(amount))
  }, []);

  const handleRemove = (productId) => {
    dispatch(removeFromBasket({ id: productId }));
  }


  return (


    <Drawer className='MuiDrawer-paper' onClose={() => dispatch(setDrawer())} anchor="right" open={drawer}>
      <h1 className='drawerTabsH1'>SEPETİNİZ</h1>

      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="basketBox">
            <div className="basketBox1">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>Adet: {product.count}</p>
              <button onClick={(() => handleRemove(product.id))} >SİL</button>
            </div>

          </div>
        ))
      ) : (
        <div>
          <h1 className='drawerTabsH1'>Sepetiniz Boş</h1>
        </div>
      )}
      <h3 className='basketH3'>Sepet Tutarınız: {amount} $</h3>
    </Drawer>
  )
}

export default DrawerTab
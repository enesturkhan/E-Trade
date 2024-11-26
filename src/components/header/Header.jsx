






























import MyImages from '../../images/newLogo.png'
import { CiShoppingBasket } from "react-icons/ci";
import { WiDaySunny } from "react-icons/wi";
import { MdNightlight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css'
import { setDrawer } from '../../redux/slice/BasketSlice.jsx';
import { setFilterProduct } from '../../redux/slice/ProductSlice.jsx';

function Header() {
  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.basket)

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (!theme) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  }
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    dispatch(setFilterProduct(inputValue));
  };

  const handleClearSearch = () => {
    setValue("");
    dispatch(setFilterProduct(""));
  }


  return (
    <div className='navbar'>
      <div onClick={() => navigate("/")} className='logoSection'>
        <img src={MyImages} />
        <p>MANASTIR STORE</p>
      </div>
      <div className='basketSection'>
        <CiSearch style={{
          cursor: value ? "pointer" : "default",
          opacity: value ? 0 : 1,
        }} className='searchIcon' />
        <input type="text" placeholder="Ürün Ara" value={value} onChange={handleSearch}
        />
        {<TiDeleteOutline style={{
          cursor: value ? "pointer" : "default",
          opacity: value ? 1 : 0,
        }} className='DeleteIcon' onClick={handleClearSearch} />}

        {theme ? < MdNightlight className='basketIcon' onClick={changeTheme} /> : <WiDaySunny className='basketIcon' onClick={changeTheme} />}


        <Badge className='MuiBadge-badge' onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="warning">
          <CiShoppingBasket className='basketIcon' />
        </Badge>




      </div>
    </div>
  )
}

export default Header
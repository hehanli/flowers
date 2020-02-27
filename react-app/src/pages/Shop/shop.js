import React from 'react';
import { Link } from 'react-router-dom';
import flower from '../../img/flower.jpg';
import style from './index.module.scss';



const Product = (props) => {
  return (
    <div className={style.productItem}>
      <img src={flower} style={{width: '100%', height: '100%'}}/>
      <div className={style.price}>
        <p>Deep Ocean™</p>
        <p>$56</p>
      </div>
    </div>
  )
}

const Shop = () => {
  return (
    <div>
       <div className={style.boxContent}>
        <div className={style.productDesc}>NEW ARRIVALS</div>
        <div className={style.productWrapper}>
          <div className={style.box}>
            {[1,2,3,4,5,6,7,8].map((item) => {
              return <Product/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Shop;
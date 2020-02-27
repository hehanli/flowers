import React, {useEffect} from 'react';
import {Row, Col} from 'antd';
import style from './index.module.scss';
import bg from '../../img/bg.jpg';
import flower from '../../img/flower.jpg';
import one from '../../img/flower01.png';
import two from '../../img/flower02.jpg';


const Index = () => {
  useEffect(() => {
    fetch('/api/getList', 
      {
      method: 'POST', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      // headers: new Headers({
      //   'Content-Type': 'application/json'
      // })
      }
    ).then((res) => {
      console.log('///////', res)
    })
  }, [])
  return (
    <div className={style.box}>
      <div className={style.boxImg}>
        <div style={{width: '100%', height: '100%'}}>
          <img src={bg} style={{width: '800px', height: '600px'}}/>
        </div>
      </div>
      <div className={style.boxContent}>
        <div className={style.productDesc}>NEW ARRIVALS</div>
        <div className={style.productWrapper}>
          <div className={style.productItem}>
            <img src={flower} style={{width: '100%', height: '100%'}}/>
          </div>
          <div className={style.productItem}>
            <img src={flower} style={{width: '100%', height: '100%'}}/>
          </div>
          <div className={style.productItem}>
            <img src={flower} style={{width: '100%', height: '100%'}}/>
          </div>
        </div>
        <div className={style.productBtnBox}>
          <div className={style.productBtn}>
            <span>VIEW COLLECTIONS</span>
          </div>
        </div>
      </div>
      <div className={style.desc_box}>
        <p>Pellentesque consequat quam quis sem dictum, </p>
        <p>sed urna venenatis.</p>
      </div>
      <div className={style.twoWrapper}>
        <Row>
          <Col span={12}>
            <div className={style.left}>
              <div className={style.leftTitle}>NEW ARRIVALS</div>
                <div className={style.leftContent}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className={style.leftBtnBox}>
                  <div className={style.leftBtn}>
                    <span>VIEW COLLECTIONS</span>
                  </div>
                </div>
              </div>
          </Col>
          <Col span={12}>
            <div  className={style.right}>
              <img src={one} style={{width: '100%', height: '100%'}}/>
            </div>
          </Col>
        </Row>
      </div>
      <div className={style.twoWrapper}>
        <Row>
          <Col span={12}>
            <div  className={style.right}>
            <img src={two} style={{width: '100%', height: '100%'}}/>
            </div>
          </Col>
          <Col span={12}>
            <div className={style.left}>
              <div className={style.leftTitle}>NEW ARRIVALS</div>
                <div className={style.leftContent}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className={style.leftBtnBox}>
                  <div className={style.leftBtn}>
                    <span>VIEW COLLECTIONS</span>
                  </div>
                </div>
              </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Index;
import React from 'react';
import { Row, Col} from 'antd';
import one from '../../img/flower01.png';
import two from '../../img/flower02.jpg';
import style from './index.module.scss';

const ContentWrapper = (props) => {
  return(
    <div className={style.content}>
      <div className={style.top}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Feb 21, 2017</p>
      </div>
      <Row>
        {
          props.isImgLeft && 
          <Col span={12}>
            <div  className={style.right}>
            <img src={two} style={{width: '100%', height: '100%'}}/>
            </div>
          </Col>
        }
        <Col span={12}>
            <div className={style.left}>
                <div className={style.leftContent}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className={style.readMore}>
                  <span>Read More ></span>
                </div>
              </div>
          </Col>
          {
            !props.isImgLeft && 
            <Col span={12}>
              <div  className={style.right}>
              <img src={two} style={{width: '100%', height: '100%'}}/>
              </div>
            </Col>
            }
        </Row>
        <div className={style.line}></div>
    </div>
  )
}

const Blog = () => {
  return (
    <div className={style.blogWrapper}>
      <div className={style.title}>
        Blog
      </div>
      <div className={style.wrapper}>
        <ContentWrapper isImgLeft={true}/>
        <ContentWrapper isImgLeft={false}/>
      </div>
    </div>
  )
}
export default Blog;
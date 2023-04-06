import { useState } from "react";
import avatar from './image-avatar.png';
import product from './image-product-1.jpg';
import product2 from './image-product-2.jpg';
import product3 from './image-product-3.jpg';
import product4 from './image-product-4.jpg';
import thumbnail1 from './image-product-1-thumbnail.jpg';
import thumbnail2 from './image-product-2-thumbnail.jpg';
import thumbnail3 from './image-product-3-thumbnail.jpg';
import thumbnail4 from './image-product-4-thumbnail.jpg';
import './App.css';


export default function App() {
  const [showcart, setShowcart] = useState(false);
  return(
    <>
    <div className="main-container" ></div>
    <Header />
    <ProductPage />
    <div className="cart-content">
      <h3>Cart</h3>
      <hr className="short" />
      <div className="cart-item"  >
        hello
        </div>
      </div>
    </>
  )
};

function Header(){
  const [clicked, setClicked] = useState(1); //for nav list
  return(
    <>
    <div className="header">
    <h1>sneakers</h1>
    <ul className="Nav-bar" >
        <li className={clicked===1?"click" : ""} onClick={()=>setClicked(1)} >Collection</li>
        <li className={clicked===2?"click" : ""} onClick={()=>setClicked(2)} >Men</li>
        <li className={clicked===3?"click" : ""} onClick={()=>setClicked(3)} >Women</li>
        <li className={clicked===4?"click" : ""} onClick={()=>setClicked(4)} >About</li>
        <li className={clicked===5?"click" : ""} onClick={()=>  setClicked(5)} >Contact</li>
        </ul>
      <div className="header-icons">
      <svg className="cart-icon" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg>

      <img className="avatar" src={avatar} alt="avatar" />
    </div>
    {/* <hr /> */}
    
    </div>
    <hr />
       </>
  )
}


function ProductPage(){
  const [quantity, setQuantity] = useState(0);
  const [productpic, setProductpic] = useState(product);
  const [isClicked, setIsClicked] = useState(1); //for thumbnail
  

  function handleMinusBtn(){
    if(quantity > 0){
      setQuantity(quantity - 1);
    }else{
      setQuantity(0);
    }
  }
  function handlePlusBtn(){
    setQuantity(quantity + 1);
  }
  return(
    <>
    <div className="product-box" >
      <img className="product-image" src={productpic} alt="product" />
      <div className="product-info">
        <p className="orange">SNEAKER COMPANY</p>
        <h2 className="product-name">Fall Limited Edition Sneakers</h2>
        <p className="product-description">These low-profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubber outer sole, they’ll <br /> withstand everything the weather can offer.</p>
        <div className="product-price">
          <div className="first-price-grid">
          <h1 className="price-1">$125.00</h1>
          <h2 className="price-2">50%</h2>
          </div>
          <h3 className="price-3">$250.00</h3>
        <div className="btn">
          <div className="quantity-btn">
          <button onClick={handleMinusBtn} >-</button>
          <p className="quantity">{quantity}</p>
          {/* <input type="number" value="1" /> */}
          <button onClick={handlePlusBtn}>+</button>
          </div>
          <div className="add-to-cart">
            <svg className="cart-icon-2" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#FFFFFF" fillRule="nonzero"/></svg>
            <p>
            Add to cart
            </p>
            </div>
        </div>
        </div>
        </div>

    </div>
    <div className="thumbnails"> 
      <img className={isClicked == 1 ? "clicked" : "thumbnail"} onClick={()=>{setProductpic(product); setIsClicked(1)}} src={thumbnail1} alt="thumbnail1" />
      <img src={thumbnail2} onClick={()=>{setProductpic(product2); setIsClicked(2)}} className={isClicked === 2 ? "clicked" : "thumbnail"} alt="thumbnail2" />
      <img src={thumbnail3} onClick={()=>{setProductpic(product3); setIsClicked(3)}} className={isClicked === 3 ? "clicked" : "thumbnail"} alt="thumbnail3" />
      <img src={thumbnail4} onClick={()=>{setProductpic(product4); setIsClicked(4)}} className={isClicked === 4 ? "clicked" : "thumbnail"} alt="thumbnail4" />

    </div>

    </>
  )
}

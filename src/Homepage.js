import React from 'react';
import "./Home.css";
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Home() {
  return (
    <div className='home'>
      <img className='home_image' 
      src='https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Electronics/page/Bigbet/Changes/Header_1500x300_Rec1._CB578611397_.gif' 
      alt=''/>
      

      <div className='home_row'>
        <Product
          id="12321341"
          title="The Learn Startup: How constant innovation creates radically successfull Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"

      
        />
        <Product
          id="12321342"
          title="Butterfly Premium Vegetable Chopper 900 Ml, Blue"
          price={5.5}
          rating={4}
          image="https://m.media-amazon.com/images/I/61fPH47Hd0L._SY355_.jpg"

      
        />

      </div>
      <div className='home_row'>
        <Product
          id="12321343"
          title="Noise Newly Launched Nova 1.46 Amoled Display with in-Built Bluetooth Calling  Premium Finish with Latest Ui,466 * 466Px Ultra Hd "
          price={36.5}
          rating={5}
          image="https://m.media-amazon.com/images/I/61EAIdvhH7L._SX679_.jpg"

      
        />
        <Product
          id="12321344"
          title="Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage)"
          price={1503.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg"

      
        />
        <Product
          id="12321345"
          title="ABROS Men's Boss ASSG1123 Sports Shoes"
          price={20.00}
          rating={4}
          image="https://m.media-amazon.com/images/I/817Q1eUmoUL._UY625_.jpg"

      
        />
      </div>
      <div className='home_row'>
        <Product
          id="12321346"
          title="Samsung 163 cm (65 inches) 8K Ultra HD Smart Neo QLED TV QA65QN800CKXXL (Titan Black)"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81P7FP8cRaL._SY355_.jpg"

      
        />
      </div>



      


    </div>
  )
}

export default Home

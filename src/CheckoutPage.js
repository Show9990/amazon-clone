import React from 'react';
import {useStateValue} from "./StateProvider";
import "./CheckoutPage.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';



function CheckoutPage() {
    const [{basket}]=useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>

      
        <img className='checkout_add' src="https://cdn.mos.cms.futurecdn.net/xqtE2xrNPRtFLcsqcQXSRB-768-80.gif" alt=""/>
      {basket?.length === 0?(
        <div>
            <h2>Your Basket is empty.</h2>
        </div>
      ):(
        <div>
            <h2 className='checkout_title'>Your Shopping Basket</h2>
            {basket.map(item=>(
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                
                
                />
                
            )
                )}
        </div>
      )}
      </div>
      {basket.length>0 &&(
        <div className='checkout_right'>
          <h1>Subtotal</h1>
          <Subtotal/>
        </div>
      )}
      
    </div>
  )
}

export default CheckoutPage

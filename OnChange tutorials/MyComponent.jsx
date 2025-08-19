// onChange = event handler used to primarily with form elemnts
//           eg. <input> <textarea, <select>,<radio>
//            Triggers a function every time the value of input changes


import {useState} from 'react'

function MyComponent(){
    const[name,setName]=useState('Unknown');
    const [quantity,setQuantity] =useState();
    
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantity(event){
        setQuantity(event.target.value);
    }
    
    const [comment,setComment] = useState();
    function handleComment(event){
        setComment(event.target.value);
    }
    
    const [paymeynt,setPaymet] = useState();
    function handlePaymentChange(event){
        setPaymet(event.target.value);
    }
    const [shipping,setShipping] =useState();

    function HandleShipping(){
        setShipping(event.target.value);

    }


    return (
        <div>
          <input value = {name} onChange={handleNameChange}></input>
          <p> My Name is : {name}</p>

          <input type="number" onChange={handleQuantity} ></input>
          <p>Quantity : {quantity}</p>

          <textarea onChange={handleComment} placeholder='Enter Comment'></textarea>
          <p>Comments <br/> {comment}</p>
          <select onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
          </select>

          <p>Payment: {paymeynt}</p>
          <label>
            <input type='radio' value="pickup"
            checked={shipping === 'pickup'}
            onChange={HandleShipping}/>
            Pickup
          </label><br/>
          <label>
          <input type='radio' value="delivery"
            checked={shipping === 'delivery'}
            onChange={HandleShipping}/>
            delivery
          </label>
          <p>Shipping: {shipping}</p>
          

        </div>
    );
}
export default MyComponent;
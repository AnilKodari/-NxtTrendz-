// // Write your code here
// import CartContext from '../../context/CartContext'

// import './index.css'

// const CartSummary = () => (
//   <CartContext.Consumer>
//     {value => {
//       const {cartList} = value
//       let total = 0
//       cartList.forEach(eachCartItem => {
//         total += eachCartItem.price * eachCartItem.quantity
//       })

//       return (
//         <>
//           <div className="cart-summary-container">
//             <h1 className="order-total-value">
//               <span className="order-total-label">Order Total:</span> Rs {total}
//               /-
//             </h1>
//             <p className="total-items">{cartList.length} Items in cart</p>
//             <button type="button" className="checkout-button d-sm-none">
//               Checkout
//             </button>
//           </div>
//           <button type="button" className="checkout-button d-lg-none">
//             Checkout
//           </button>
//         </>
//       )
//     }}
//   </CartContext.Consumer>
// )

// export default CartSummary
import {useState} from 'react'
import CartContext from '../../context/CartContext'
import CheckoutPopup from '../PaymentPopup' // Update the path accordingly
import './index.css'

const CartSummary = () => {
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false)

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        let total = 0
        cartList.forEach(eachCartItem => {
          total += eachCartItem.price * eachCartItem.quantity
        })

        const handleCheckoutClick = () => {
          setShowCheckoutPopup(true)
        }

        const handleCloseCheckoutPopup = () => {
          setShowCheckoutPopup(false)
        }

        return (
          <>
            <div className="cart-summary-container">
              <h1 className="order-total-value">
                <span className="order-total-label">Order Total:</span> Rs{' '}
                {total}/-
              </h1>
              <p className="total-items">{cartList.length} Items in cart</p>
              <button
                type="button"
                className="checkout-button"
                onClick={handleCheckoutClick}
              >
                Checkout
              </button>
            </div>

            {showCheckoutPopup && (
              <CheckoutPopup
                onClose={handleCloseCheckoutPopup}
                totalCost={total}
                numberOfItems={cartList.length}
                onConfirmOrder={() => {
                  // Implement logic for confirming the order
                  // This could involve updating your state, making API calls, etc.
                  handleCloseCheckoutPopup()
                }}
              />
            )}
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary

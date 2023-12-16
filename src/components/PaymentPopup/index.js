// CheckoutPopup.js

import {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const CheckoutPopup = ({onClose, totalCost, numberOfItems, onConfirmOrder}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    'Cash on Delivery',
  )
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handlePaymentMethodChange = e => {
    setSelectedPaymentMethod(e.target.value)
  }

  const handleConfirmOrder = () => {
    if (selectedPaymentMethod === 'Cash on Delivery') {
      onConfirmOrder()
      setShowSuccessMessage(true)
    }
    // Add logic for other payment methods if needed
  }

  return (
    <Popup open modal closeOnDocumentClick>
      {close => (
        <div className="checkout-popup">
          <h2>Checkout</h2>
          <p>Total Cost: {totalCost}</p>
          <p>Number of Items: {numberOfItems}</p>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Net Banking"
              disabled
              checked={selectedPaymentMethod === 'Net Banking'}
              onChange={handlePaymentMethodChange}
            />
            Net Banking
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Cash on Delivery"
              checked={selectedPaymentMethod === 'Cash on Delivery'}
              onChange={handlePaymentMethodChange}
            />
            Cash on Delivery
          </label>
          {showSuccessMessage ? (
            <>
              <p>Your order has been placed successfully!</p>
              <button
                type="button"
                onClick={() => {
                  close()
                  onClose()
                }}
              >
                Close
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => {
                  handleConfirmOrder()
                  close()
                }}
                disabled={selectedPaymentMethod !== 'Cash on Delivery'}
              >
                Confirm Order
              </button>
              <button
                type="button"
                onClick={() => {
                  close()
                  onClose()
                }}
              >
                Close
              </button>
            </>
          )}
        </div>
      )}
    </Popup>
  )
}

export default CheckoutPopup

// // CheckoutPopup.js

// import {useState} from 'react'

// const CheckoutPopup = ({onClose, totalCost, numberOfItems, onConfirmOrder}) => {
//   const [selectedPaymentMethod] = useState('Cash on Delivery')

//   const handleConfirmOrder = () => {
//     onConfirmOrder()
//   }

//   return (
//     <div className="checkout-popup">
//       <h2>Checkout</h2>
//       <p>Total Cost: {totalCost}</p>
//       <p>Number of Items: {numberOfItems}</p>
//       <label>
//         <input
//           type="radio"
//           name="paymentMethod"
//           value="Net Banking"
//           disabled
//           checked={selectedPaymentMethod === 'Net Banking'}
//           onChange={() => {}}
//         />
//         Net Banking
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="paymentMethod"
//           value="Cash on Delivery"
//           checked={selectedPaymentMethod === 'Cash on Delivery'}
//           onChange={() => {}}
//         />
//         Cash on Delivery
//       </label>
//       <button
//         type="button"
//         onClick={handleConfirmOrder}
//         disabled={selectedPaymentMethod !== 'Cash on Delivery'}
//       >
//         Confirm Order
//       </button>
//       <button type="button" onClick={onClose}>
//         Close
//       </button>
//     </div>
//   )
// }

// export default CheckoutPopup

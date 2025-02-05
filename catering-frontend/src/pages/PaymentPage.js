import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expDate: '', cvv: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const response = await axios.post('/api/payments', paymentInfo);
      if (response.data.success) {
        alert('Payment successful!');
        navigate('/dashboard');
      } else {
        alert('Payment failed, please try again.');
      }
    } catch (error) {
      alert('Payment failed, please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      <form onSubmit={handlePayment}>
        <div className="mb-4">
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            className="w-full p-2 border rounded"
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label>Expiration Date:</label>
          <input
            type="month"
            name="expDate"
            className="w-full p-2 border rounded"
            value={paymentInfo.expDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            className="w-full p-2 border rounded"
            value={paymentInfo.cvv}
            onChange={handleInputChange}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;

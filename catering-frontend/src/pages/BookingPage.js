import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('/api/menus');
        setMenus(response.data);
      } catch (error) {
        alert('Failed to fetch menus!');
      }
    };
    fetchMenus();
  }, []);

  const formik = useFormik({
    initialValues: { menuId: '', eventDate: '', numberOfGuests: 1 },
    validationSchema: Yup.object({
      menuId: Yup.string().required('Please select a menu'),
      eventDate: Yup.date().required('Event date is required'),
      numberOfGuests: Yup.number().min(1, 'Number of guests must be at least 1').required('Please specify the number of guests'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post('/api/bookings', values);
        navigate('/dashboard');
      } catch (error) {
        alert('Booking failed. Please try again.');
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Book Catering</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label>Menu:</label>
          <select
            name="menuId"
            className="w-full p-2 border rounded"
            onChange={formik.handleChange}
            value={formik.values.menuId}
          >
            <option value="">Select a menu</option>
            {menus.map((menu) => (
              <option key={menu._id} value={menu._id}>
                {menu.name}
              </option>
            ))}
          </select>
          {formik.errors.menuId && <p className="text-red-500">{formik.errors.menuId}</p>}
        </div>

        <div className="mb-4">
          <label>Event Date:</label>
          <input
            type="date"
            name="eventDate"
            className="w-full p-2 border rounded"
            onChange={formik.handleChange}
            value={formik.values.eventDate}
          />
          {formik.errors.eventDate && <p className="text-red-500">{formik.errors.eventDate}</p>}
        </div>

        <div className="mb-4">
          <label>Number of Guests:</label>
          <input
            type="number"
            name="numberOfGuests"
            className="w-full p-2 border rounded"
            onChange={formik.handleChange}
            value={formik.values.numberOfGuests}
          />
          {formik.errors.numberOfGuests && <p className="text-red-500">{formik.errors.numberOfGuests}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingPage;

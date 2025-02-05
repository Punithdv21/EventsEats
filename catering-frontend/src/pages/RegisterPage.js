import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../pages/RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post('/api/auth/register', values);
        navigate('/login');
      } catch (error) {
        alert('Registration failed. Please try again.');
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}
        </div>

        <div className="mb-4">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}
        </div>

        <div className="mb-4">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>}
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;

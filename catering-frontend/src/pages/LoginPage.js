import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/auth/login', values);
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      } catch (error) {
        alert('Login failed! Check your credentials.');
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={formik.handleSubmit}>
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

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;


import React, { useState} from 'react';
import './StudentForm.css';

const StudentForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: '',
    ...initialData
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age" required />
      <input name="class" value={formData.class} onChange={handleChange} placeholder="Class" required />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;

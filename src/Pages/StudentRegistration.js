
import React from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../store/studentsSlice';
import StudentForm from '../Component/StudentForm';
import { useNavigate } from 'react-router-dom';

const StudentRegistration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddStudent = (formData) => {
    dispatch(addStudent(formData));
    navigate('/students');
  };

  return (
    <div>
      <h2>Register Student</h2>
      <StudentForm onSubmit={handleAddStudent} />
    </div>
  );
};

export default StudentRegistration;

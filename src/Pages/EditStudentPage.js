
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateStudent } from '../store/studentsSlice';
import StudentForm from '../Component/StudentForm';

const EditStudentPage = () => {
  const { id } = useParams();
  const student = useSelector(state =>
    state.students.students.find(student => student.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (formData) => {
    dispatch(updateStudent({ ...formData, id: student.id }));
    navigate('/students');
  };

  if (!student) return <p>Student not found</p>;

  return (
    <div>
      <h2>Edit Student</h2>
      <StudentForm initialData={student} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditStudentPage;

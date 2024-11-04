
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent } from '../store/studentsSlice';
import StudentList from '../Component/StudentList';

const StudentListPage = () => {
  const students = useSelector(state => state.students.students);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div>
      <h2>Student List</h2>
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
};

export default StudentListPage;

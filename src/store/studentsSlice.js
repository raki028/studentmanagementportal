
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push({ ...action.payload, id: Date.now() });
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(student => student.id === action.payload.id);
      if (index >= 0) state.students[index] = action.payload;
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Dashboard from './Pages/Dashboard';
import StudentRegistration from './Pages/StudentRegistration';
import StudentListPage from './Pages/StudentListPage';
import StudentDetailsPage from './Pages/StudentDetailsPage';
import EditStudentPage from './Pages/EditStudentPage'; 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<StudentRegistration />} />
          <Route path="/students" element={<StudentListPage />} />
          <Route path="/students/:id" element={<StudentDetailsPage />} />
          <Route path="/edit-student/:id" element={<EditStudentPage />} /> {/* Add edit route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

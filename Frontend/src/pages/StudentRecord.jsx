import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/student.css";
const StudentRecord = () => {
  const [students, setStudents] = useState([]);
  const [matno, setMatno] = useState("");
  const [pupil, setPupil] = useState(null);

  const API_URL = "https://student-records-yiz6.onrender.com";
  useEffect(() => {
    const handleRecords = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/all`);
        if (response) {
          setStudents(response.data);
          toast.success("Students data fetched successfully");
        } else {
          toast.error("No records found");
        }
        console.log(response.data, "students data");
      } catch (error) {
        console.log(error, "There was error fetching students data");
      }
    };

    handleRecords();
  }, []);

  const SingleStudent = async () => {
    const trimmedMatno = matno.trim().toLowerCase();  // Trim and convert to lowercase
  
    if (trimmedMatno === "") {
      toast.error("Please input your Mat No.");
      return;
    }
    if (trimmedMatno.length < 9) {
      toast.error("Mat No. must be at least 9 characters long.");
      return;
    }
  
    try {
      const response = await axios.post(`${API_URL}/api/student`, {
        matno: trimmedMatno,
      });
  
      // Check if response contains student data
      if (!response.data || Object.keys(response.data).length === 0) {
        toast.error("No record found for this Mat No.");
        setPupil(null); // Set pupil to null if no student found
        console.log(response.data, "student data not found");
      } else {
        setPupil(response.data);  // Set pupil data if found
        toast.success("Student record found");
        console.log(response.data);  // You can check the fetched data here
      }
    } catch (error) {
      toast.error("Error fetching student record. Please try again.");
      console.error("Error:", error);
    }
  };
  
  

  return (
    <>
      <div className="table-overview">
        <div className="">
          <h2>Check For Your Name</h2>
          {pupil ? <h2>{pupil.fullname} has registered</h2> : <h2>No student found</h2>}

          <div className="search">
            <input
              type="text"
              name="matno"
              autoFocus
              autoComplete="no"
              placeholder="Input Your Mat No."
              onChange={(e) => setMatno(e.target.value)}
            />
            <button onClick={SingleStudent}>Search</button>
          </div>

          <div className="table-container">
            <table className="student-table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Full Name</th>
                  <th>Mat No.</th>
                  <th>Faculty</th>
                  <th>Department</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Skills</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student._id}>
                    <td>{index + 1}</td>
                    <td>{student.fullname}</td>
                    <td>{student.matno}</td>
                    <td>{student.faculty}</td>
                    <td>{student.dept}</td>
                    <td>{student.gender}</td>
                    <td>{student.dob}</td>
                    <td>{student.skills.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            Can't find your name<Link to="/"> Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentRecord;

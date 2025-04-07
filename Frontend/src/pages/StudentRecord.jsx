import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/student.css";
const StudentRecord = () => {
  const [studensts, setStudents] = useState([]);

  useEffect(() => {
    const handleRecords = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/new/check/students"
        );
        setStudents(response.data);
      } catch (error) {
        console.log(error, "There was error fetching students data");
      }
    };

    handleRecords();
  }, []);

  return (
    <>
      <div className="table-overview">
        <div className="">
          <h2>Check For Your Name</h2>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Mat No.</th>
                <th>Faculty</th>
                <th>Department</th>
                <th>Level</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Skills</th>
              </tr>
            </thead>

            <tbody>
              {studensts.map((student) => {
                <tr key={student._id}>
                  <td>{student.fullname}</td>
                  <td>{student.matno}</td>
                  <td>{student.faculty}</td>
                  <td>{student.dept}</td>
                  <td>{student.level}</td>
                  <td>{student.gender}</td>
                  <td>{student.age}</td>
                </tr>;
              })}
            </tbody>
          </table>
          <p>
            Can't find your name<Link to="/"> Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentRecord;

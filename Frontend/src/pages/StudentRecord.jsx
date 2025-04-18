import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/student.css";
const StudentRecord = () => {
  const navigate = useNavigate();
  const [studensts, setStudents] = useState([]);
  const [matno, setMatno] = useState("");
  const [pupil, setPupil] = useState(null);
  const [isValid, setIsvalid] = useState(false);

  useEffect(() => {
    const handleRecords = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/all");
        console.log(response);
        setStudents(response.data);
      } catch (error) {
        console.log(error, "There was error fetching students data");
      }
    };

    handleRecords();
  }, []);

  const SingleStudent = async () => {
    const student = await axios.post("http://localhost:8800/api/student", {
      matno,
    });
    if (student) {
      setPupil(student.data);
      console.log(student);
      alert("successful");
    } else {
      setPupil("Sorry No name match the matno");
      console.log(student);
      alert("student not found");
    }
  };

  return (
    <>
      <div className="table-overview">
        <div className="">
          <h2>Check For Your Name</h2>
          {pupil && <h2>{pupil.fullname} has registered</h2>}
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

          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Full Name</th>
                <th>Mat No.</th>
                <th>Faculty</th>
                <th>Department</th>
                <th>Gender</th>
                <th>DOB</th>
              </tr>
            </thead>
            {/* //Iyare2468# */}
            <tbody>
              {studensts.map((student) => 
                <tr key={student._id}>
                <td>{student.fullname}</td>
                <td>{student.matno}</td>
                <td>{student.faculty}</td>
                <td>{student.dept}</td>
                <td>{student.gender}</td>
                <td>{student.age}</td>
              </tr>
              )}
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

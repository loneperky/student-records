import React, { useState, useEffect } from "react";
import "../styles/login.css";
import Footer from "../Components/footer";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [fullname, SetFullName] = useState("");
  const [matno, setMatNo] = useState("");
  const [faculty, SetFaculty] = useState("");
  const [dept, SetDept] = useState("");
  const [level, setLevel] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(Date);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [mssg, setMssg] = useState("Use UpperCase only ");

  const skillsList = [
    "Full-Stark Web Development",
    "Frontend Development",
    "Backend Development",
    "API Development",
    "Graphics Design",
    "Cyber-Security",
    "Tech Journalism",
    "App Development",
    "Blockchain Development",
    "Data Analysis",
    "Vibe Coder",
    "Others",
  ];

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const skill = event.target.value;

    setSelectedSkills((prevSelectedSkills) => {
      if (prevSelectedSkills.includes(skill)) {
        return prevSelectedSkills.filter((s) => s !== skill);
      } else {
        return [...prevSelectedSkills, skill];
      }
    });
  };
  const API_URL = "https://student-records-yiz6.onrender.com"
  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/register`, {
        fullname,
        matno,
        dept,
        faculty,
        level,
        gender,
        age,
        skills: selectedSkills,
      });

      if (response) {
        setMssg("Record created successfully");
        console.log(response);
        toast.success("Registration successful");
        window.scroll(0, 0);
        SetFullName("");
        setMatNo("");
        SetFaculty("");
        SetDept("");
        setLevel(0);
        setGender("");
        setAge(Date);
        setSelectedSkills([]);
      } else {
        setMssg("Could not create record");
        toast.error("Registration failed");
      }
    } catch (error) {
      console.log(error, "there was an error");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="login-overview">
        
          <section className="logins">
            <p>{mssg}</p>
            <form onSubmit={handleRegistration}>
              <input
                className="text"
                type="text"
                autoFocus="yes"
                value={fullname}
                placeholder="Full Name"
                name="fullname"
                onChange={(e) => SetFullName(e.target.value)}
              />
              <input
                className="text"
                type="text"
                required
                value={matno}
                placeholder="Mat No."
                name="matno"
                onChange={(e) => setMatNo(e.target.value)}
              />
              <input
                className="text"
                type="text"
                required
                placeholder="Faculty"
                name="faculty"
                onChange={(e) => SetFaculty(e.target.value)}
              />
              <input
                className="text"
                type="text"
                required
                placeholder="Department"
                name="dept"
                onChange={(e) => SetDept(e.target.value)}
              />
              <select
                className="text"
                name="level"
                required
                id="level"
                onChange={handleChange}
              >
                <option value="">Class Level</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
              </select>

              <br />
              <label htmlFor="gender" className="gender" required>
                What's your gender
              </label>
              <br />
              <input
                type="radio"
                className="radio"
                onChange={(e) => setGender("male")}
                name="gender"
                id=""
              />
              <label htmlFor="">Male</label>
              <br />

              <input
                type="radio"
                className="radio"
                onChange={(e) => setGender("female")}
                name="gender"
                id=""
              />
              <label htmlFor="">Female</label>
              <br />

              <label htmlFor="" className="age">
                Age:
                <input
                  type="date"
                  name="age"
                  onChange={(e) => setAge(e.target.value)}
                  id=""
                  placeholder="DOB"
                />
              </label>
              <h3>Area Of Concentration</h3>
              {skillsList.map((skill) => (
                <div key={skill}>
                  <input
                    type="checkbox"
                    value={skill}
                    style={{ marginLeft:"0.5rem" }}
                    checked={selectedSkills.includes(skill)}
                    onChange={handleCheckboxChange}
                  />
                  <label style={{padding:"0 0.5rem"}}>{skill}</label>
                </div>
              ))}
              <button>Register</button>
            </form>
          </section>

      </div>
      <Footer />
    </>
  );
};

export default Login;

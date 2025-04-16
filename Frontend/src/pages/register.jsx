import React, { useState, useEffect } from "react";
import "../styles/login.css";
import Footer from "../Components/footer";
import axios from "axios";

const Login = () => {
  const [fullname, SetFullName] = useState("");
  const [matno, setMatNo] = useState("");
  const [faculty, SetFaculty] = useState("");
  const [dept, SetDept] = useState("");
  const [level, setLevel] = useState(0);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(Date);
  const [mssg, setMssg] = useState("Use UpperCase only ");
  
  const allSkills = ["Full-Stark Web Development","Frontend Development","Backend Development","API Development","Graphics Design","Cyber-Security","Tech Journalism","App Development","Blockchain Development","Data Analysis","Vibe Coder","Others"]

  const [skills, setSkills] = useState("");

  // axios.defaults.withCredentials = true;

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
     
      const response = await axios.post("http://localhost:9000/new/register", {
        fullname,
        matno,
        dept,
        faculty,
        level,
        gender,
        age,
      });

      if (response.status) {
        setMssg("Record created successfully");
        console.log(response);
        alert("Registration successful");
        window.scroll(0, 0);
      } else {
        setMssg("Could not create record");
        alert("Registration failed");
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
        <div className="login-details">
          <section className="logins">
            <h3>Please Fill The Form Below To Register</h3>
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
              <select className="text" name="level" required id="">
                <option value="">Class Level</option>
                <option onFocus={(e) => setLevel(100)} value="100">
                  100
                </option>
                <option onFocus={(e) => setLevel(200)} value="200">
                  200
                </option>
                <option onFocus={(e) => setLevel(300)} value="300">
                  300
                </option>
                <option onFocus={(e) => setLevel(400)} value="400">
                  400
                </option>
                <option onFocus={(e) => setLevel(500)} value="500">
                  500
                </option>
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
              <input
                type="checkbox"
                className="box"
                onChange={(e) => setSkills("Full-stark web development")}
              />
              <label htmlFor="">Full-Stark Web Development</label>
              <br />

              <input
                type="checkbox"
                className="box"
                onChange={(e) => setSkills("Frontend Development")}
              />
              <label htmlFor="">Frontend Development</label>
              <br />

              <input
                type="checkbox"
                onChange={(e) => setSkills("Backend")}
                className="box"
              />
              <label htmlFor="">Backend Development</label>
              <br />

              <input type="checkbox" className="box" />
              <label htmlFor="">API Development</label>
              <br />

              <input type="checkbox" className="box" />
              <label htmlFor="">Graphic Design</label>
              <br />

              <input type="checkbox" className="box" />
              <label htmlFor="">Cyber Security Expert</label>
              <br />

              <input type="checkbox" className="box" />
              <label htmlFor="">Tech Journalism</label>
              <br />

              <input type="checkbox" className="box" />
              <label htmlFor="">App Development</label>
              <br />

              <input type="checkbox" className="box" />
              <label htmlFor="">Block-Chain Developement</label>
              <br />

              <input type="checkbox" className="box" />
              <label htmlFor="">Data Analysis</label>
              <br />

              <input type="checkbox" className="box" />
              <label htmlFor="">Vibe Coders</label>
              <br />

              <input type="checkbox" className="box" />
              <label htmlFor="">Others</label>
              <br />
              <button>Register</button>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

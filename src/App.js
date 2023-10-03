import { useState } from 'react';
import './App.css';

const App = () => {
  /* Input states */
  const [nameInput, setNameInput] = useState("");
  const [courseInput, setCourseInput] = useState("");
  const [instructorInput, setInstructorInput] = useState("");

  /* Student states */
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [instructor, setInstructor] = useState("");

  /* Error states */
  const [nameErr, setNameErr] = useState(false);
  const [courseErr, setCourseErr] = useState(false);
  const [instructorErr, setInstructorErr] = useState(false);
  /* Number states */

  const [numbers, setNumbers] = useState(0);

  const createStudent = (e) => {
    e.preventDefault();

    setNameErr(false);
    setCourseErr(false);
    setInstructorErr(false);

    if (nameInput.trim() && courseInput.trim() && instructorInput.trim()) {
      setName(nameInput.trim());
      setCourse(courseInput.trim());
      setInstructor(instructorInput.trim());

      setNameInput("");
      setCourseInput("");
      setInstructorInput("");
    }
    else {
      !nameInput.trim() && setNameErr(true);
      !courseInput.trim() && setCourseErr(true);
      !instructorInput.trim() && setInstructorErr(true);
    }

  }

  return (
    <main className="app">
      <div className="inc-dec">
        <button onClick={() => { setNumbers(numbers + 1) }} >+1</button>
        <button onClick={() => { setNumbers(numbers - 1) }}>-1</button>
        <p>{numbers}</p>
      </div>
      <div className="reset-numbers">
        <button onClick={() => { setNumbers(0) }}>RESET</button>
      </div>
      <h2>Student Manager</h2>
      <form className='student-form'>
        <div className="input-control">
          <input
            type="text"
            placeholder="Student Name"
            onChange={(event) => setNameInput(event.target.value)}
            value={nameInput}
          />
          {nameErr && <p className="error">Please enter a student name</p>}
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder="Course"
            onChange={(event) => setCourseInput(event.target.value)}
            value={courseInput}
          />
          {courseErr && <p className="error">Please enter a course</p>}
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder="Instructor"
            onChange={(event) => setInstructorInput(event.target.value)}
            value={instructorInput}
          />
          {instructorErr && <p className="error">Please enter an instructor</p>}
        </div>
        <button onClick={createStudent}

        >Create Student</button>
      </form>
      {name && course && instructor
        ?
        (<div className="student-container">
          <ul className="student-card">
            <li>{name}</li>
            <li>{course}</li>
            <li>{instructor}</li>
          </ul>
        </div>)
        : null


      }
    </main >


  );
}

export default App;
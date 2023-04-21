import Dashboard from "./Pages/Dashboard/Dashboard";
import { Route,Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import NewTrainer from "./Pages/List/TrainerList/NewTrainer";
import SingleEdit from "./Pages/List/StudentList/SingleEdit";
import "./Style/dark.scss"
import { DarkModeContext } from "./Context/DarkModeContext";
import { useContext } from "react";
import Profile from "./Pages/Profile/Profile";
import CourseList from "./Pages/List/CourseList/CourseList";
import InquiryList from "./Pages/List/InquiryList/InquiryList";
import NewInquiry from "./Pages/List/InquiryList/NewInquiry";
import NewCourse from "./Pages/List/CourseList/NewCourse";
import TrainerList from "./Pages/List/TrainerList/TrainerList";
import StudentList, { rows } from "./Pages/List/StudentList/StudentList";
import NewStudent from "./Pages/List/StudentList/NewStudent";
import TrainerEdit from "./Pages/List/TrainerList/TrainerEdit";
import CourseEdit from "./Pages/List/CourseList/CourseEdit";
import Register from "./Pages/Register/Register";

function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/students">
              <Route index  element={<StudentList />}></Route>
              <Route path=":studentId" element={<SingleEdit tableData={rows}/>}></Route>
              <Route path="new" element={<NewStudent />}></Route>
            </Route>
            <Route path="/trainers">
              <Route index  element={<TrainerList/>}></Route>
              <Route path=":trainerId" element={<TrainerEdit/>}></Route>
              <Route path="new" element={<NewTrainer/>}></Route>
            </Route>
            <Route path="/courses">
              <Route index  element={<CourseList/>}></Route>
              <Route path=":courseId" element={<CourseEdit/>}></Route>
              <Route path="new" element={<NewCourse/>}></Route>
            </Route>
            <Route path="/inquiries">
              <Route index  element={<InquiryList/>}></Route>
              <Route path=":inquiryId" element={<SingleEdit/>}></Route>
              <Route path="new" element={<NewInquiry/>}></Route>
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;

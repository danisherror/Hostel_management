import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
//------------------------------------------------------------------------------
//student
import Landing from './college/Logins/LandingPage';
import LeaveApplication from './Student/LeaveApplication/ApplyLeave'
import Printleaveapplication from './Student/LeaveApplication/Showleave'
import EditLeaveApplication from './Student/LeaveApplication/EditLeave'
import Roomcomplaint from "./Student/RoomComplaint/RoomComplaint";
import PrintRoomComplaints from "./Student/RoomComplaint/ShowComplaint";
import EditComplaint from "./Student/RoomComplaint/EditComplaint";
import FeedbackPage from "./Student/FeedBack/FeedBack";
import PrintStudentFeedbacks from "./Student/FeedBack/ShowFeedback";
import EditStudentFeedBack from "./Student/FeedBack/EditFeedBack"
import ApplyHostel from "./Student/Hostel/ApplyHostel"
import UProfile from './Student/Profile/Profile';
import USettings from './Student/Profile/Settings';
import ShowStudentAnnouncements from "./Student/Announcements/showAnnouncements"
//------------------------------------------------------------------------------
//admin
import AdminDashBoard from './pages/Dashboard/AdminDashBoard';
import AProfile from "./Admin/Profile/Profile";
import ASetting from "./Admin/Profile/Setting";
import GetHostelDetails from "./Admin/Hostel/RoomInfo";
import CreateHostel from "./Admin/Hostel/CreateHostel";
import DeleteHostel from "./Admin/Hostel/DeleteHostel";
import GetStudentLeaveApplication from "./Admin/LeaveApplication/showLeaveApplication";
import AEditstudentLeaveApplication from "./Admin/LeaveApplication/EditLeaveApplication";
import ChangeRoomIssueStatus from "./Admin/RoomComplaints/EditRoomCOmplaints";
import GetStudentRoomIsses from "./Admin/RoomComplaints/ShowRoomComplaints";
import GetStudentFeedbacks from "./Admin/FeedBack/ShowFeedback";
import ShowStudentProfile from "./Admin/Student/ShowStudentProfile";
import GetStudentProfile from "./Admin/Student/GetStudentProfiles";
import QRScanner from "./Admin/Scanner/Scanner";
import GetAllQrTokens from "./Admin/Scanner/GetAllQrcodes";
import CreateAnnouncements from "./Admin/Announcment/CreateAnnouncements";
import ShowAllAnouncements from "./Admin/Announcment/ShowAnnouncemets";
import EditAnnouncement from "./Admin/Announcment/EditAnnouncements";
import CreateWarden from "./Admin/Warden/CreateWarden";
import ShowAllWardenDetails from "./Admin/Warden/ShowWardens"
import ShowWardenProfile from "./Admin/Warden/ShowSingleWarden";
import DeleteWarden from "./Admin/Warden/DeleteWarden";
//-----------------------------------------------------------------------------
//warden
import WardenDashboard from './pages/Dashboard/WardenDashBoard';
import WcreateAnnouncement from "./Warden/Announcements/CreateAnnouncements";
import ShowWardenAnnouncement from "./Warden/Announcements/ShowAnnouncemets";
import WEditAnnouncement from "./Warden/Announcements/EditAnnouncements";
import WShowFeedback from "./Warden/Feedback/ShowFeedback";
import WRoomInfo from "./Warden/Hostel/RoomInfo";
import WgetLeaveApplication from "./Warden/LeaveApplication/showLeaveApplication"
import WEditstudentLeaveApplication from "./Warden/LeaveApplication/EditLeaveApplication";
import WGetStudentRoomIsses from "./Warden/RoomComplaint/ShowRoomComplaints";
import WChangeRoomIssueStatus from "./Warden/RoomComplaint/EditRoomCOmplaints";
import WGetStudentProfile from "./Warden/Student/GetStudentProfiles";
import WShowStudentProfile from "./Warden/Student/ShowStudentProfile"
import WQRScanner from "./Warden/Scanner/Scanner";
import WGetAllQrTokens from "./Warden/Scanner/GetAllQrcodes";
import WProfile from "./Warden/Profile/Profile";
//-----------------------------------------------------------------------------
//Homepage
import HomePage from "./pages/Dashboard/HomePage"
import HostelRules from "./HomePage/HostelRules/HostelRules"
import Contact from './HomePage/Contact/Contact_info';
import Guidelines from "./HomePage/Guidelines/Guidelines";
import Mess from "./HomePage/Mess/Mess"
import Imagess from "./HomePage/HostelRules/Images"
//-----------------------------------------------------------------------------
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>

        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <HomePage />
            </>
          }
        />
        <Route
          path="/uhomepage"
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/uprofile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <UProfile />
            </>
          }
        />
        <Route
          path="/usettings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <USettings />
            </>
          }
        />
        <Route
          path="/imagess"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Imagess />
            </>
          }
        />
        <Route
          path="/leaveapplication"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <LeaveApplication />
            </>
          }
        />
        <Route
          path="/printleaveapplication"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Printleaveapplication />
            </>
          }
        />
        <Route
          path="/editStudentleaveapplication"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <EditLeaveApplication />
            </>
          }
        />

        <Route
          path="/roomcomplaint"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Roomcomplaint />
            </>
          }
        />
        <Route
          path="/printRoomComplaints"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <PrintRoomComplaints />
            </>
          }
        />
        <Route
          path="/editStudentComplaint"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <EditComplaint />
            </>
          }
        />

         <Route
          path="/feedback"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FeedbackPage />
            </>
          }
        />
        <Route
          path="/printFeedbackData"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <PrintStudentFeedbacks />
            </>
          }
        />
        <Route
          path="/editStudentFeedBack"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <EditStudentFeedBack />
            </>
          }
        />
        <Route
          path="/applyHostel"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ApplyHostel />
            </>
          }
        />
        {/* Admin Start*/}

        <Route
          path="/ahomepage"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AdminDashBoard />
            </>
          }
        />
        <Route
          path="/aprofile"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AProfile />
            </>
          }
        />
        <Route
          path="/asettings"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ASetting />
            </>
          }
        />

        <Route
          path="/getHostelDetails"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <GetHostelDetails />
            </>
          }
        />
        <Route
          path="/createHostel"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <CreateHostel />
            </>
          }
        />
         <Route
          path="/deleteHostel"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <DeleteHostel />
            </>
          }
        />
        <Route
          path="/getLeaveApplication"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <GetStudentLeaveApplication />
            </>
          }
        />
        <Route
          path="/changeleaveApplicationStatus"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AEditstudentLeaveApplication />
            </>
          }
        />
        <Route
          path="/getstudentroomissues"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <GetStudentRoomIsses />
            </>
          }
        />
        <Route
          path="/changerooomissueStatus"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ChangeRoomIssueStatus />
            </>
          }
        />
        <Route
          path="/getStudentFeedback"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <GetStudentFeedbacks />
            </>
          }
        />
        <Route
          path="/ShowStudentProfile"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ShowStudentProfile />
            </>
          }
        />
        <Route
          path="/getallStudents"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <GetStudentProfile />
            </>
          }
        />
        <Route
          path="/scanqrcode"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <QRScanner />
            </>
          }
        />
        <Route
          path="/getAllQrTokens"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <GetAllQrTokens />
            </>
          }
        />
        <Route
          path="/createAnnouncement"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <CreateAnnouncements />
            </>
          }
        />
        <Route
          path="/showAllAnouncements"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ShowAllAnouncements />
            </>
          }
        />

        <Route
          path="/showStudentAnnouncements"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ShowStudentAnnouncements />
            </>
          }
        />
        <Route
          path="/editAnnouncement"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <EditAnnouncement />
            </>
          }
        />
        <Route
          path="/createWarden"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <CreateWarden />
            </>
          }
        />
        <Route
          path="/showAllWardenDetails"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ShowAllWardenDetails />
            </>
          }
        />
        <Route
          path="/showWardenProfile"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ShowWardenProfile />
            </>
          }
        />
        <Route
          path="/deleteWarden"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <DeleteWarden />
            </>
          }
        />
        <Route
          path="/whomepage"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WardenDashboard />
            </>
          }
        />

        <Route
          path="/wcreateAnnouncement"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WcreateAnnouncement />
            </>
          }
        />
        <Route
          path="/wshowAnnouncement"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ShowWardenAnnouncement />
            </>
          }
        />
        <Route
          path="/weditAnnouncement"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WEditAnnouncement />
            </>
          }
        />
        <Route
          path="/wgetStudentFeedback"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WShowFeedback />
            </>
          }
        />
        <Route
          path="/wgetHostelDetails"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WRoomInfo />
            </>
          }
        />
        <Route
          path="/wgetLeaveApplication"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WgetLeaveApplication />
            </>
          }
        />
        <Route
          path="/wchangeleaveApplicationStatus"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WEditstudentLeaveApplication />
            </>
          }
        />
        <Route
          path="/wgetstudentroomissues"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WGetStudentRoomIsses />
            </>
          }
        />
        <Route
          path="/wchangerooomissueStatus"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WChangeRoomIssueStatus />
            </>
          }
        />
        <Route
          path="/wgetallStudents"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WGetStudentProfile />
            </>
          }
        />
        <Route
          path="/wShowStudentProfile"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WShowStudentProfile />
            </>
          }
        />
        <Route
          path="/wscanqrcode"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WQRScanner />
            </>
          }
        />
        <Route
          path="/wgetAllQrTokens"
          element={
            <>
              <PageTitle title="Hostel | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WGetAllQrTokens />
            </>
          }
        />
        <Route
          path="/wprofile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <WProfile />
            </>
          }
        />
        <Route
          path="/hostelrules"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <HostelRules />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Contact />
            </>
          }
        />
        <Route
          path="/guidelines"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Guidelines />
            </>
          }
        />
        <Route
          path="/mess"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Mess />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />

        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;

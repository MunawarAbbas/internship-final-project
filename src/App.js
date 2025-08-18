import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import BooksList from './pages/BooksList.js';
import CreateBookPage from './pages/CreateBookPage.js';
import CreateEmployeePage from './pages/CreateEmployeePage.js';
import CreateItem from './pages/CreateItem.js';
import CreateReviewPage from './pages/CreateReviewPage.js';
import CreateRoomHistoryPage from './pages/CreateRoomHistoryPage.js';
import CreateRoomPage from './pages/CreateRoomPage.js';
import EmployeesList from './pages/EmployeesList.js';
import ReviewsList from './pages/ReviewsList.js';
import RoomHistoryList from './pages/RoomHistoryList.js';
import RoomsList from './pages/RoomsList.js';
import UsersList from './pages/UsersList.js';


function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/room/:id" element={<RoomDetails />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          
            <Route path="/admin/books" element={<BooksList />} />
            <Route path="/admin/books/create" element={<CreateBookPage />} />
            <Route path="/admin/employees/create" element={<CreateEmployeePage />} />
            <Route path="/admin/createitem" element={<CreateItem />} />
            <Route path="/admin/reviews/create" element={<CreateReviewPage />} />
            <Route path="/admin/room-history/create" element={<CreateRoomHistoryPage />} />
            <Route path="/admin/rooms/create" element={<CreateRoomPage />} />
            <Route path="/admin/employees" element={<EmployeesList />} />
            <Route path="/admin/reviews" element={<ReviewsList />} />
            <Route path="/admin/room-history" element={<RoomHistoryList />} />
            <Route path="/admin/rooms" element={<RoomsList />} />
            <Route path="/admin/users" element={<UsersList />} />
</Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;








// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Rooms from './pages/Rooms';
// import RoomDetails from './pages/RoomDetails';
// import Booking from './pages/Booking';
// import Contact from './pages/Contact';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import Review from './pages/Review';

// function App() {
//   return (
//       <div className="App">
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/rooms" element={<Rooms />} />
//             <Route path="/room/:id" element={<RoomDetails />} />
//             <Route path="/booking/:id" element={<Booking />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/review/:bookingId"  element={<Review />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//   );
// }

// export default App;
import './App.css';
import Navs from './pages/nav';
import About from './pages/about';
import Contact from './pages/contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Login from './pages/auth/login.jsx';
import Profile from './pages/auth/users/profile.jsx';
import Apkfile from './pages/auth/users/add_new_file.jsx';
import Protected from './pages/protected.jsx';
import Register from './pages/auth/register.jsx'
import Footer from './pages/footer';
import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';

function App() {
  // Check if the user is logged in (use localStorage, context, or state)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    Navigate('/');
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navs />
          {/* Render the routes */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={isLoggedIn ? <Navigate to="/profile" /> : <Login />} />
            <Route path="/logout" element={handleLogout ? <Login /> : <Navigate to="/profile" />} />


            {/* Protected route for profile page */}
            <Route element={<Protected />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/add-new-file" element={<Apkfile />} />
            </Route>

            {/* Default route */}
            {/* <Route path="/" element={isLoggedIn ? <Navigate to="/profile"> : <Login />} /> */}
            <Route path="/" element={isLoggedIn ? <Navigate to="/profile" /> : <Login />} />

          </Routes>

         
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;

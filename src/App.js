import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/Blogs";
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import NotFound404 from "./pages/404";



function App() {
  return (
    <div className="App">
       <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route element={<NotFound404 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

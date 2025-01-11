import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Book from "./pages/Book";
import Blog from "./pages/Blog";
import Tips from "./pages/Tips";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import About from "./pages/About";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/book" element={<Book />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default App;
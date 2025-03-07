import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import CategoriesPage from './CategoriesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategoriesPage />} /> {/* default route */}
        <Route path="/login" element={<LoginPage />} /> {/* route for /loginpage */}
        <Route path="/categories" element={<CategoriesPage />} /> {/* route for categories */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

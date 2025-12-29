import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';
import ByCategoryPage from './pages/ByCategoryPage';
import BlogPage from './pages/DetailsPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/byCategory/:categoryID" element={<ByCategoryPage />} />
          <Route path="/details/:postID" element={<BlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
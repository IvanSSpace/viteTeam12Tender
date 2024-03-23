// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageOne from './components/pages/pageOne/PageOne';
import PageTwo from './components/pages/pageTwo/PageTwo';
import MainPage from './components/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} >
            <Route index element={<div>No page is selected.</div> } />
            <Route path="one" element={<PageOne />} />
            <Route path="two" element={<PageTwo />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

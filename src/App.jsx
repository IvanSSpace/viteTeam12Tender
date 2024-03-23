
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import PageTwo from './components/pages/PageTwo';
import Layout from './components/pages/Layout';

function App() {
  return (
    <div className='red123'>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            {/* <Route index element={<div>No page is selected.</div> } /> */}
            <Route path="/" element={<MainPage />} />
            <Route path="two" element={<PageTwo />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

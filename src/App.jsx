
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import PageTwo from './components/pages/PageTwo';
import Layout from './components/pages/Layout';
import SelectRegions from './components/pages/SelectRegions1';
import AddItemsList from './components/pages/AddItemsList2';
import SettingRecommendations from './components/pages/SettingRecommendations';
import SelectGrown from './components/pages/SelectGrown3';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';



function App() {
  return (
    <div className='red123'>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            {/* <Route index element={<div>No page is selected.</div> } /> */}
            <Route path="/" element={<MainPage />} />
            <Route path="two" element={<PageTwo />} />
            <Route path="selectRegions" element={<SelectRegions />} />
            <Route path="selectGrown" element={<SelectGrown />} />
            <Route path="addItemsList" element={<AddItemsList />} />
            <Route path="settingRecommendations" element={<SettingRecommendations />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="settingRecommendations" element={<SettingRecommendations />} />
            <Route path="*" element={<div>No page is selected.</div> } />
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

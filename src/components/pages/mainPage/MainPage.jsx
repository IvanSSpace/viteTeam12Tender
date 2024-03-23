// import from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Главная</Link>
          </li>
          <li>
            <Link to='/two'>Page Two</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  )
};

export default MainPage;
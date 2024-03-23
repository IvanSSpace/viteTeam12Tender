// import from 'react';
import { Link, Outlet } from 'react-router-dom';
import BaseContainer from './BaseContainer';

const Layout = () => {
  return (
    <>
      <nav>
      <ul className="flex justify-center space-x-4">
    <li>
    <Link to='/' class="text-purple-600 hover:text-blue-600">Главная</Link>
    </li>
    <li>
    <Link to='/two' class="text-purple-600 hover:text-blue-600">Two</Link>
  </li>
</ul>

      </nav>
      <hr />
      <BaseContainer>
      <Outlet />
      </BaseContainer>
    </>
  )
};

export default Layout;
// import from 'react';
import { Link, Outlet } from "react-router-dom";
import BaseContainer from "../helpComponents/BaseContainer";

const Layout = () => {
  return (
    <>
      <nav className="mb-4 mt-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="text-purple-600 hover:text-blue-600">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/two" className="text-purple-600 hover:text-blue-600">
              Two
            </Link>
          </li>
          <li>
            <Link to="/selectRegions" className="text-purple-600 hover:text-blue-600">
            Мои регионы
            </Link>
          </li>
          <li>
            <Link to="/selectGrown" className="text-purple-600 hover:text-blue-600">
            Мои отрасли
            </Link>
          </li>
          <li>
            <Link to="/addItemsList" className="text-purple-600 hover:text-blue-600">
            Список позиций моей компании
            </Link>
            </li>
            <li>
            <Link to="/settingRecommendations" className="text-purple-600 hover:text-blue-600">
            Список позиций моей компании
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <BaseContainer>
        <Outlet />
      </BaseContainer>
    </>
  );
};

export default Layout;

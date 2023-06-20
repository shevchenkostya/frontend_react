import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';

import { Link } from 'react-router-dom';
import { MainPageAsync } from './Pages/MainPage/MainPage.async';
import { AboutPageAsync } from './Pages/AboutPage/About.async';
import { Suspense } from 'react';

import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync />}></Route>
          <Route path={'/about'} element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';

import { Link } from 'react-router-dom';


import { Suspense } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'Pages/AboutPage';
import { MainPage } from 'Pages/MainPage';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />}></Route>
          <Route path={'/about'} element={<AboutPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

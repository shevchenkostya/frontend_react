import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';

import { AppRouter } from './providers/router';
import { Navbar } from 'widgets';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
}

export default App;

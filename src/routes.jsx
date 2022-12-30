import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';
import App from './App';

export default function Rotas() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </HashRouter>
  );
}

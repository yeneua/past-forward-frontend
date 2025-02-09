import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyle from './styles/fonts/GlobalStyle';
import GlobalFont from './styles/fonts/GlobalFont';
import TemplateNothingPage from './pages/TemplateNothingPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tn' element={<TemplateNothingPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

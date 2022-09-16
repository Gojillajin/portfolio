import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './Page/LogIn';
import Account from './Page/Account';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn />} />  {/*이동할 페이지*/}
        <Route path='/Page/Account' element={<Account />} />  이동할 페이지
      </Routes>      
    </BrowserRouter>
    </div>
  );
}

export default App;

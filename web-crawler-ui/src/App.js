import React from 'react';
import useStore from './store';
import MainPage from './zustand_componenets/MainPage';
import Sidebar from './zustand_componenets/SideBar';
import LoginSignUp from './zustand_componenets/LoginAndSignUp';

import './styles/App.scss'
function App() {
  const { pageIndex, setPageIndex } = useStore()
  let thePage = ""
    switch (pageIndex) {
      case 'mainPage':
        thePage = <MainPage />
        break;
    
      case 'login':
        thePage = <LoginSignUp />
        break;

      default :
        thePage = <MainPage />
        break;

    }
  return (
    <div className='App'>
      <Sidebar/>
      {
        thePage
      }
    </div>
  );
}

export default App;

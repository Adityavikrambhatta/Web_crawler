import React from 'react';
// import setStore from './store';
import MainPage from './zustand_componenets/MainPage'
import Sidebar from './zustand_componenets/SideBar';
import './styles/App.scss'
function App() {
    // const { count, increase, decrease } = setStore();

  return (
    <div className='App'>
      <Sidebar/>
      <MainPage />
    </div>
  );
}

export default App;

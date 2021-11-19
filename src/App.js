import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style/app.scss';
import Start from './component/start/Start';
import Join from './component/start/Join';
import Login from './component/start/Login';
import Diagnosis from './component/diagnosis/Diagnosis';
import Main from './component/main/Main';
import QrCode from './component/qr/QrCode';
import Live from './component/live/Live';
import Loading from './component/utils/Loading';

function App() {
  const userState = useSelector(state => state.user.loading);
  const mapState = useSelector(state => state.map.loading);
  const liveState = useSelector(state => state.live.loading);

  return (
    <div className="App">
      {(userState||mapState||liveState) && <Loading/>}
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/diagnosis/*" element={<Diagnosis/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/qrcode" element={<QrCode/>}/>
        <Route path="/live" element={<Live/>}/>
      </Routes>
    </div>
  );
}

export default App;

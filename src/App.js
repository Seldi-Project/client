import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style/app.scss';
import Start from './component/start/Start';
import Join1 from './component/start/Join1';
import Join2 from './component/start/Join2';
import Join3 from './component/start/Join3';
import Join4 from './component/start/Join4';
import Join5 from './component/start/Join5';
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
        <Route path="/join1" element={<Join1/>}/>
        <Route path="/join2" element={<Join2/>}/>
        <Route path="/join3" element={<Join3/>}/>
        <Route path="/join4" element={<Join4/>}/>
        <Route path="/join5" element={<Join5/>}/>
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

import { Route, Routes } from 'react-router-dom';
import './style/app.scss';
import Start from './component/start/Start';
import Diagnosis from './component/diagnosis/Diagnosis';
import Main from './component/main/Main';
import QrCode from './component/qr/QrCode';
import Live from './component/live/Live';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/diagnosis/*" element={<Diagnosis/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/qrcode" element={<QrCode/>}/>
        <Route path="/live" element={<Live/>}/>
      </Routes>
    </div>
  );
}

export default App;

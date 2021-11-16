import * as React from 'react';
import { time } from '../utils/Reusable';
import '../../style/app.scss';

export default function TimeSelect() {
  
  return (
    <div className="selection" id="timeSelect">
      <select className="select">
        {time.map(({ title }, i) => {
          return <option key={i} value={i+1}>{title} 기준</option>
        })}
      </select>
    </div>
  );
};
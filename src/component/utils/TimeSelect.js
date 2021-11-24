import * as React from 'react';
import { useDispatch } from 'react-redux';
import { time } from '../utils/Reusable';
import { setLiveOption } from '../../module/live';
import { setMapOption } from '../../module/map';
import '../../style/app.scss';

export default function TimeSelect({ type }) {
  const dispatch = useDispatch();

  const getToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  }

  const changeSelect = (data) => {
    //옵션 변경
    if (type==="live") {
      dispatch(setLiveOption(data));
    } else {
      dispatch(setMapOption(data));
    }
  }

  return (
    <div className="selection" id="timeSelect">
      <select className="select" onChange={(e) => changeSelect(e.target.value)}>
        {time.map(({ title, value }, i) => {
          return (
            <option key={i} value={`${getToday()}-${value}`}>
              {title} 기준
            </option>
          )
        })}
      </select>
    </div>
  );
};
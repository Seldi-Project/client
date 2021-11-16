import * as React from 'react';
import '../../style/live.scss';
import { ReactComponent as State1 } from '../../source/State1.svg';
import { ReactComponent as State2 } from '../../source/State2.svg';
import { ReactComponent as State3 } from '../../source/State3.svg';

export default function LiveItem({ desc, state, index }) {
  const setState = () => {
    if (state==="soso") {
      return <State1/>
    } else if (state==="bad") {
      return <State2/>
    } else {
      return <State3/>
    }
  }

  return (
    <div className="item" id="liveItem">
      <table id="liveTable">
        <tbody>
          <tr>
            <td id="user">{index===undefined ? "나":"익명"+(index+1)}</td>
            <td id="desc">{desc}</td>
            <td id="state">
              {setState()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
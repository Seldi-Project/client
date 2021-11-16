// @flow
import * as React from 'react';
import '../../style/diagnosis.scss';

export default function DetailItem({ index, title, subtitle }) {
  return (
    <div className="item" id="detailItem">
      <p id="title">{index}. {title}</p>
      <p id="subtitle">{subtitle}</p>
      <div id="radioSet">
        <input type="radio" id={index+"no"} value={0} name={index}/>
        <label htmlFor={index+"no"}>아니요 (NO)</label>
        <input type="radio" id={index+"yes"} value={1} name={index}/>
        <label htmlFor={index+"yes"}>예 (YES)</label>
      </div>
    </div>
  );
};
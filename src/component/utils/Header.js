import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ExpandLeft } from '../../source/ExpandLeft.svg';
import '../../style/header.scss';

export default function Header({ left, title, number }) {
  const navigate = useNavigate();

  return (
    <div className="header">
      {left &&
        <div className="left" onClick={() => navigate(-1)}>
          <ExpandLeft/>
        </div>  
      }
      {title==="join" ?
        <div className="process">
          <span className="processItem" id={number===1?"selected":"none"}></span>
          <span className="processItem" id={number===2?"selected":"none"}></span>
          <span className="processItem" id={number===3?"selected":"none"}></span>
          <span className="processItem" id={number===4?"selected":"none"}></span>
          <span className="processItem" id={number===5?"selected":"none"}></span>
        </div>
      :
        <p className="center">{title}</p>
      }
    </div>
  );
}
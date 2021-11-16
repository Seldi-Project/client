import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ExpandLeft } from '../../source/ExpandLeft.svg';
import '../../style/header.scss';

export default function TopBar({ title }) {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="left" onClick={() => navigate(-1)}>
        <ExpandLeft/>
      </div>

      <p className="center">{title}</p>
    </div>
  );
}
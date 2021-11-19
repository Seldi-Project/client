import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import '../../style/loading.scss';

export default function Loading() {
  return (
    <div className="component" id="loadingComponent">
      <AiOutlineLoading size="30"/>
    </div>
  );
};
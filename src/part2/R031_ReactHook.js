import React , { useState, useEffect } from 'react';


/** 031. hook 사용하기 */
export default function R031_ReactHook(props) {
  const [contents, setContents] = useState('[THIS IS REACT]');

  // componentDidMount() 같은 역활
  useEffect(() => {
    console.log('useEffect');
  });

  return (
    <div style={{padding: "0px"}}>
      <h2>{contents}</h2>
      <button onClick={()=>setContents('[THIS IS HOOK]')}>
        버튼
      </button>
    </div>
  )
}
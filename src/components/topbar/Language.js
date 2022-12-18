import React, { useState } from 'react';
import './Language.css';

const LanguageSelector = () => {
  const [ setLanguage] = useState('english');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.checked ? 'bangla' : 'english');
  }


  return (
    <div className="switch">
      <input id="language" className="check-toggle check-toggle-round-flat" type="checkbox" onChange={handleLanguageChange} />
      <label htmlFor="language"></label>
      <span  className="on">EN</span>
      <span  className="off">TH</span>
    </div>
  );}

 

export default LanguageSelector;

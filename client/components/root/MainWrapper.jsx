import React from 'react';

import MenuBar from './MenuBar.jsx';
//import Content from './Content.jsx';

const MainWrapper = (props) => {
  console.log(props);
  return (
    <div className="MainWrapper">
      <MenuBar className="MenuBar" />
      {props.children}
    </div>
  )
}

export default MainWrapper

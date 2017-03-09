import React from 'react';

import MenuBar from './MenuBar.jsx';
import Content from './Content.jsx';

const MainWrapper = () => {
  return (
    <div className="MainWrapper">
      <MenuBar className="MenuBar" />
      <Content className="Content"/>
    </div>
  )
}

export default MainWrapper

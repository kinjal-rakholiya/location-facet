import React, { useState } from 'react'
import OpenedWidget from './components/OpenedWidget'
import Header from './components/Header'
import Minimized from './components/Minimized'

import './App.css';

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [minimized, setMinimized] = useState(false)

    return (
      <div className="widget-cotainer">
        {minimized ? <Minimized updateMinimized={() => setMinimized(!minimized)}/> :
        <div className={`opened-widget-form ${collapsed && "close"}`}>
          <Header 
            collapsed={collapsed}
            updateCollapsed={() => {setCollapsed(!collapsed)}}
            minimized={minimized}
            updateMinimized={() => setMinimized(!minimized)}
          />
          {!collapsed && <OpenedWidget />}
        </div>}
      </div>
  );
}

export default App;

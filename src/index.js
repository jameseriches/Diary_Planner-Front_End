import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.css'

import App from './App'

import SkillsProvider from './context/SkillsContext'
// import QuestsProvider from './context/QuestsContext'
// import DiariesProvider from './context/DiariesContext'

ReactDOM.render(
  <React.StrictMode>

    <SkillsProvider>
      {/* <QuestsProvider>
        <DiariesProvider> */}

          <App />

        {/* </DiariesProvider>
      </QuestsProvider> */}
    </SkillsProvider>

  </React.StrictMode>,
  document.getElementById('root')
)

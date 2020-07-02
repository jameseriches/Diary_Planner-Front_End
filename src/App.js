import React from 'react'

import DataButtons from './components/DataButtons'
import Tabs from './components/Tabs'

function App() {
  return (
    <div className="body">
    <div style={{marginTop: '20px', marginLeft: '20px', backgroundColor: "#191f28", padding: "20px"}}>
      <h1 style={{textAlign: 'center', }}>Quest and Diary Planner</h1>
      <div style={{textAlign: 'left', }}>
        Our OSRS Quest Planner allows you to determine what quests are available
        to you. You can enter your skill levels, check off the quests you've
        completed, and see what quests are currently available to you. Use
        various options on the quest calculator to help sort and filter quests,
        making it easy for you to determine what quests to do next!
      </div>
      <br></br>
      <div style={{textAlign: 'right', }}>
      <DataButtons  />
      <small>
        This will save/load the information you submit into the planner.
      </small>
      
      </div>
      <div>
        <Tabs />
        <hr></hr>
        </div>
      
    </div>
    </div>
  )
}

export default App

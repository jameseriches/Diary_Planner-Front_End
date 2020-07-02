import React, {useContext} from 'react'

import {SkillsDispatchContext} from '../context/SkillsContext'

function DataButtons() {
	const dispatchSkills = useContext(SkillsDispatchContext) 

	return (
		<div className=''>
			<button style={{backgroundColor: 'orange', margin: "2px" }} onClick={() => {}}>
				<div style={{margin: "10px" }}>LOAD</div>
			</button>

			<button style={{backgroundColor: 'green', margin: "2px" }} onClick={() => {}}>
				<div style={{margin: "10px" }} >SAVE</div>
			</button>

			<button style={{backgroundColor: 'red', margin: "2px" }} onClick={() => dispatchSkills({type: 'reset'})}>
			<div style={{margin: "10px", textAlign:"left" }}>RESET</div>
			</button>
		</div>
	)
}

export default DataButtons

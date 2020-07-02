import React, {useContext} from 'react'

import {SkillsDispatchContext} from '../context/SkillsContext'

function DataButtons() {
	const dispatchSkills = useContext(SkillsDispatchContext) 

	return (
		<div className=''>
			<button style={{backgroundColor: 'orange', margin: "2px" }} onClick={() => {}}>
				LOAD
			</button>

			<button style={{backgroundColor: 'green', margin: "2px" }} onClick={() => {}}>
				SAVE
			</button>

			<button style={{backgroundColor: 'red', margin: "2px" }} onClick={() => dispatchSkills({type: 'reset'})}>
				RESET
			</button>
		</div>
	)
}

export default DataButtons

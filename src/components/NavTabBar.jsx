import React from 'react'

function NavTabBar({setCurrentTab}) {

	return (
		<div style={{textAlign: 'left', }}>
			<button className="navButton" onClick={() => setCurrentTab('skills')}>
				Skills
			</button>

			<button className="navButton" onClick={() => setCurrentTab('quests')}>
				Quests
			</button>

			<button className="navButton" onClick={() => setCurrentTab('diaries')}>
				Diaries
			</button>
            <hr></hr>
		</div>
	)
}

export default NavTabBar

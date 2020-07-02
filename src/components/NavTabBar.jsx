import React from 'react'

function NavTabBar({setCurrentTab}) {

	return (
		<div style={{textAlign: 'left', }}>
			<button className="navButton" onClick={() => setCurrentTab('skills')}>
				Skills
			</button>

			<button onClick={() => setCurrentTab('quests')}>
				Quests
			</button>

			<button onClick={() => setCurrentTab('diaries')}>
				Diaries
			</button>
		</div>
	)
}

export default NavTabBar

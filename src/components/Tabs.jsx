import React, {useState} from 'react'

import NavTabBar from './NavTabBar'

import Skills from './Tabs/Skills'
import Quests from './Tabs/Quests'
import Diaries from './Tabs/Diaries'

function Tabs() {
	const [currentTab, setCurrentTab] = useState('skills') // skills, quests, diaries - default is skills 

	return (
		<>
			<NavTabBar setCurrentTab={setCurrentTab}/> {/* This will set the current tab, pulling from the navtabbar file */}
			{currentTab === 'skills' && <Skills/>}
			{currentTab === 'quests' && <Quests/>}
			{currentTab === 'diaries' && <Diaries/>}
		</>
	)
}

export default Tabs
// Will pull this Tabs file inside the app.js file to render it

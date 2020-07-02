import React, {useContext} from 'react'

import {SkillsStateContext} from '../../context/SkillsContext'

import QuestJson from '../../constants/quests'

// camelCaseThings	 --> js variables, functions, etc
// PascalCaseThings  --> React Components, JsonObjects
// snake_case_things --> db
// kebab-case-things --> css/html
// CAPS_SNAKE_THINGS --> js constants

function Quests() {

	const skillState = useContext(SkillsStateContext)
	
	return (
		<div>
			{QuestJson.map(quest => {
				/*
					* quest: {
					* 	title: string
					* 	difficulty: string
					* 	length: string
					* 	questRequirements: string[]
					*  skillRequirements: string[]
					*  qpRequirment: string
					* 	reward: string
					* }
					**/
				const skillRequirements = quest.skillRequirements.map(skillRequirement => {
					const [requiredLevel, requiredSkill] = skillRequirement.split(' ')
					const currentLevel = skillState[requiredSkill.toLowerCase()]
					return {
						value: skillRequirement,
						ready: currentLevel >= requiredLevel
					}
				})
                
				// const questRequirements = quest.questRequirements.map(questRequirements => {
				// 		return {
				//			\\// validation
				// 		}
				// })


				return (
					<div key={Math.random()}>
						<div>Title: {quest.title}</div>
						<div>Difficulty: {quest.difficulty}</div>
						<div>Length: {quest.length}</div>
						<div>Skill Requirements:
							{skillRequirements.map(skill => {
								return (
									<div 
										key={Math.random()}
										className={skill.ready ? 'text-green' : 'text-red'}
									>
										{skill.value}
									</div>
								)
							})}
						</div>
						<div> Quest Requirements:
						{quest.questRequirements.map(questRequirement => {
							return (
								<div key={Math.random()}>
									{questRequirement}
								</div>
							)
							})}	
							<div><p>Rewards: </p>{quest.reward}</div>
						</div><br></br>
					</div>
				)
			})}
		</div>
	)
}

export default Quests


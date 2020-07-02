import React, {useReducer, useContext, createContext} from 'react'

export const SkillsDispatchContext = createContext({})
export const SkillsStateContext = createContext({})

// prettier-ignore
const DEFAULT_SKILLS = {
	attack: 			1,
	hitpoints: 		10,
	mining:       1,
	strength:     1,
	agility:      1,
	smithing:     1,
	defence:      1,
	herblore:     1,
	fishing:      1,
	ranged:       1,
	thieving:     1,
	cooking:      1,
	prayer:       1,
	crafting: 	  1,
	firemaking: 	1,
	magic: 				1,
	fletching: 		1,
	woodcutting: 	1,
	runecrafting: 1,
	slayer: 			1,
	farming: 			1,
	construction: 1,
	hunter: 			1,
}


function SkillsProvider(props) {
	// rotate around useReducer, the things closest are connected and same follows for things farthest away
	// state is equal to DEFAULT_SKILLS and dispatch is equal to the callback function UseReducer
	const [state, dispatch] = useReducer((prevState, action) => {

		if (action.type === 'reset') {
			return DEFAULT_SKILLS
		}

		if (action.type === 'set') {
			return {...prevState, [action.skill]: action.value}
		}

	}, DEFAULT_SKILLS) 

	return (
		<SkillsDispatchContext.Provider value={dispatch}>
			<SkillsStateContext.Provider value={state}>
				{props.children}
			</SkillsStateContext.Provider>
		</SkillsDispatchContext.Provider>
	)
}

export default SkillsProvider
// export const SkillsDispatch = () => useContext(SkillsDispatchContext)
// export const SkillsState = () => useContext(SkillsStateContext)


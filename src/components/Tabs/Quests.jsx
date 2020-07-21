import React, {useContext} from 'react'

import {SkillsStateContext} from '../../context/SkillsContext'
import {Table} from 'semantic-ui-react'

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
      <Table celled>
        <Table.Header>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Difficulty</Table.HeaderCell>
          <Table.HeaderCell>Length</Table.HeaderCell>
          <Table.HeaderCell>Requirements</Table.HeaderCell>
          <Table.HeaderCell>Reward</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
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
            const skillRequirements = quest.skillRequirements.map(
              skillRequirement => {
                const [requiredLevel, requiredSkill] = skillRequirement.split(
                  ' ',
                )
                const currentLevel = skillState[requiredSkill.toLowerCase()]
                return {
                  value: skillRequirement,
                  ready: currentLevel >= requiredLevel,
                }
              },
            )

            return (
              <Table.Row key={Math.random()}>
                <Table.Cell>{quest.title}</Table.Cell>
                <Table.Cell>{quest.difficulty}</Table.Cell>
                <Table.Cell>{quest.length}</Table.Cell>
                <Table.Cell>
                  {quest.questRequirements.map(questRequirement => {
                    return <div key={Math.random()}>{questRequirement}</div>
                  })}
                  {skillRequirements.map(skill => {
                    return (
                      <div
                        key={Math.random()}
                        className={skill.ready ? 'text-green' : 'text-red'}>
                        {skill.value}
                      </div>
                    )
                  })}
                </Table.Cell>
                <Table.Cell>{quest.reward}</Table.Cell>
                <hr></hr>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default Quests

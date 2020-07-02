import React, {useContext} from 'react'

import {SkillsDispatchContext} from '../../context/SkillsContext'
import {SkillsStateContext} from '../../context/SkillsContext'

function Skills() {
  const skillDispatch = useContext(SkillsDispatchContext)
  const skillState = useContext(SkillsStateContext)

  function handleChange(name, newValue) {
    skillDispatch({
      type: 'set',
      skill: name,
      value: newValue,
    })
  }
  
  return (
    <div className="flex">

      <div data-name="row 1" className="skill-row">
        <div data-name="cell1" className="flex">
            <img className="" src="https://oldschool.tools/images/skills/attack.png" alt="attack"/>
            <input
                max={99}
                min={1}
                value={skillState.attack} 
                onChange={e => handleChange('attack', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell2" className="flex">
            <img src="https://oldschool.tools/images/skills/hitpoints.png" alt="hitpoints"/>
            <input
                max={99}
                min={10}
                value={skillState.hitpoints} 
                onChange={e => handleChange('hitpoints', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell3" className="flex">
            <img src="https://oldschool.tools/images/skills/mining.png" alt="mining"/>
            <input
                max={99} 
                min={1}
                value={skillState.mining} 
                onChange={e => handleChange('mining', e.target.value)} 
                type='number'
            />
        </div>
      </div>
      <div data-name="row2">
        <div data-name="cell1" className="flex">
            <img src="https://oldschool.tools/images/skills/strength.png" alt="strength"/>
            <input
                max={99} 
                min={1}
                value={skillState.strength} 
                onChange={e => handleChange('strength', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell2" className="flex">
            <img src="https://oldschool.tools/images/skills/agility.png" alt="agility"/>
            <input
                max={99} 
                min={1}
                value={skillState.agility} 
                onChange={e => handleChange('agility', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell3" className="flex">
            <img src="https://oldschool.tools/images/skills/smithing.png" alt="smithing"/>
            <input
                max={99} 
                min={1}
                value={skillState.smithing} 
                onChange={e => handleChange('smithing', e.target.value)} 
                type='number'
            />
        </div>
      </div>
      <div data-name="row3">
        <div data-name="cell1" className="flex">
            <img src="https://oldschool.tools/images/skills/defence.png" alt="defence"/>
            <input
                max={99} 
                min={1}
                value={skillState.defence} 
                onChange={e => handleChange('defence', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell2" className="flex">
            <img src="https://oldschool.tools/images/skills/herblore.png" alt="herblore"/>
            <input
                max={99} 
                min={1}
                value={skillState.herblore} 
                onChange={e => handleChange('herblore', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell3" className="flex">
            <img src="https://oldschool.tools/images/skills/fishing.png" alt="fishing"/>
            <input
                max={99} 
                min={1}
                value={skillState.fishing} 
                onChange={e => handleChange('fishing', e.target.value)} 
                type='number'
            />
        </div>
      </div>
      <div data-name="row4">
        <div data-name="cell1" className="flex">
            <img src="https://oldschool.tools/images/skills/ranged.png" alt="ranged"/>
            <input
                max={99} 
                min={1}
                value={skillState.ranged} 
                onChange={e => handleChange('ranged', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell2" className="flex">
            <img src="https://oldschool.tools/images/skills/thieving.png" alt="thieving"/>
            <input
                max={99} 
                min={1}
                value={skillState.thieving} 
                onChange={e => handleChange('thieving', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell3" className="flex">
            <img src="https://oldschool.tools/images/skills/cooking.png" alt="cooking"/>
            <input
                max={99} 
                min={1}
                value={skillState.cooking} 
                onChange={e => handleChange('cooking', e.target.value)} 
                type='number'
            />
        </div>
      </div>
      <div data-name="row5">
        <div data-name="cell1" className="flex">
            <img src="https://oldschool.tools/images/skills/prayer.png" alt="prayer"/>
            <input
                max={99} 
                min={1}
                value={skillState.prayer} 
                onChange={e => handleChange('prayer', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell2" className="flex">
            <img src="https://oldschool.tools/images/skills/crafting.png" alt="crafting"/>
            <input
                max={99} 
                min={1}
                value={skillState.crafting} 
                onChange={e => handleChange('crafting', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell3" className="flex">
            <img src="https://oldschool.tools/images/skills/firemaking.png" alt="firemaking"/>
            <input
                max={99} 
                min={1}
                value={skillState.firemaking} 
                onChange={e => handleChange('firemaking', e.target.value)} 
                type='number'
            />
        </div>
      </div>
      <div data-name="row6">
        <div data-name="cell1" className="flex">
            <img src="https://oldschool.tools/images/skills/magic.png" alt="magic"/>
            <input
                max={99} 
                min={1}
                value={skillState.magic} 
                onChange={e => handleChange('magic', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell2" className="flex">
            <img src="https://oldschool.tools/images/skills/fletching.png" alt="fletching"/>
            <input
                max={99} 
                min={1}
                value={skillState.fletching} 
                onChange={e => handleChange('fletching', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell3" className="flex">
            <img src="https://oldschool.tools/images/skills/woodcutting.png" alt="woodcutting"/>
            <input
                max={99} 
                min={1}
                value={skillState.woodcutting} 
                onChange={e => handleChange('woodcutting', e.target.value)} 
                type='number'
            />
        </div>
      </div>
      <div data-name="row7">
        <div data-name="cell1" className="flex">
            <img src="https://oldschool.tools/images/skills/runecrafting.png" alt="runecrafting"/>
            <input
                max={99} 
                min={1}
                value={skillState.runecrafting} 
                onChange={e => handleChange('runecrafting', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell2" className="flex">
            <img src="https://oldschool.tools/images/skills/slayer.png" alt="slayer"/>
            <input
                max={99} 
                min={1}
                value={skillState.slayer} 
                onChange={e => handleChange('slayer', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell3" className="flex">
            <img src="https://oldschool.tools/images/skills/farming.png" alt="farming"/>
            <input
                max={99} 
                min={1}
                value={skillState.farming} 
                onChange={e => handleChange('farming', e.target.value)} 
                type='number'
            />
        </div>
      </div>
      <div data-name="row8">
        <div data-name="cell1" className="flex">
            <img src="https://oldschool.tools/images/skills/construction.png" alt="construction"/>
            <input
                max={99} 
                min={1}
                value={skillState.construction} 
                onChange={e => handleChange('construction', e.target.value)} 
                type='number'
            />
        </div>
        <div data-name="cell2" className="flex">
            <img src="https://oldschool.tools/images/skills/hunter.png" alt="hunter"/>
            <input
                max={99} 
                min={1}
                value={skillState.hunter} 
                onChange={e => handleChange('hunter', e.target.value)} 
                type='number'
            />
        </div>
      </div>

    </div>
  )
}

export default Skills

import React, { Component } from "react"
import '../../styles/components/Abilities.css'
import * as abilitiesImgs from '../../assets/img/abilities'


class Abilities extends Component{

    renderAbilities(selectedAgent) {
        if (selectedAgent) {
            return(
                <div>
                    {Object.keys(abilitiesImgs[selectedAgent]).map(abilityName => (
                        <img src={abilitiesImgs[selectedAgent][abilityName]} key={abilityName} alt={abilityName}
                            style={{width: '50px', height:'auto'}} 
                            className={`Ability ${abilityName === this.props.globalState.selectedAbility ? 'Ability-active' : ''}`} 
                            onClick={() => {
                                this.props.setGlobalState({
                                    selectedAbility: abilityName === this.props.globalState.selectedAbility ? null : abilityName,
                                })
                            }}
                        />
                    ))}
                </div>
            )
        }
    }

    render() {
        const { selectedAgent } = this.props.globalState
        return(
            <div >
                {this.renderAbilities(selectedAgent)}
   
            </div>
        )
    }
    
}

export default Abilities
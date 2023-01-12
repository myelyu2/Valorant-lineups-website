import React, { Component } from "react"
import "../../styles/components/Agents.css"
import * as agentImgs from '../../assets/img/agents'

class Agents extends Component {

    onAgentClick(selectedAgent) {
        this.props.setGlobalState({
            selectedAgent,
            selectedMap: 'any',
            selectedAbility: null,
            selectedSide: 'all',
        });
    }

    renderAgent(agentName, selected) {
        return (
            <div 
                onClick={() => { this.onAgentClick(selected ? null : agentName)}} 
                className={`Agent ${selected ? 'Agent-active' : ''}`} 
                key={agentName}>
                <img src={agentImgs[agentName]} alt={agentName} style={{width: '70px', height:'auto'}}/>
            </div> 
        )
    }

    render() {
        const { allData, selectedSource, selectedAgent } = this.props.globalState
        return(
            <div>
                {Object.keys(allData[selectedSource] || {}).map(agentName => this.renderAgent(agentName, agentName === selectedAgent))}
            </div>
        )
    }
}

export default Agents
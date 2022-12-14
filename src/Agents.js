import React, { Component } from "react"
import "./Agents.css"
import * as agentImgs from './img/agents'

class Agents extends Component {

    renderAgent(agentName, selected) {
        return (
            <div 
                onClick={() => {
                    this.props.setGlobalState({
                        selectedAgent: selected ? null : agentName,
                        selectedMap: 'any',
                        selectedAbility: null,
                        selectedSide: 'all',
                    })
                }} 
                className={`Agent ${selected ? 'Agent-active' : ''}`} 
                key={'ra-' + agentName}>
                <img src={agentImgs[agentName]} alt={agentImgs[agentName]} style={{width: '70px', height:'auto'}}/>
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
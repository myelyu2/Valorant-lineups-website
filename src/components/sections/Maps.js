import React, { Component } from 'react';
import '../../styles/components/Maps.css';

class Maps extends Component {

    mapExistForAgent(allData, selectedSource, selectedAgent, mapName) {
        return (mapName === 'any') || (selectedAgent && Object.keys(allData[selectedSource][selectedAgent]).includes(mapName))
     }

    renderMap(mapName) {
        const { allData, selectedSource, selectedAgent, selectedMap } = this.props.globalState
        const mapNameUpper = mapName[0].toUpperCase() + mapName.slice(1)
        const mapForAgentExists = this.mapExistForAgent(allData, selectedSource, selectedAgent, mapName)

        return (
            <div className={`Map ${selectedMap === mapName ? 'Map-active' : ''}`} key={'sm-' + mapName} onClick={() => {
                if (mapForAgentExists) {
                    this.props.setGlobalState({
                        selectedMap: mapName !== selectedMap ? mapName : null,
                    })
                }
            }}>
                <span style={{ color: mapForAgentExists ? 'white' : 'grey' }}>{mapNameUpper}</span>
            </div>
        )
    }

    render() {
        const { allMapNames } = this.props.globalState
        // console.log(allMapNames)

        return(
            <div className='MapList'>
                {allMapNames.map(mapName => this.renderMap(mapName))}
            </div>
        )
    }
}

export default Maps;
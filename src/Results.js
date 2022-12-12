import React, { Component } from "react";
import "./Results.css"

import { bookmark, bookmark_filled } from './img'

import * as abilityIcons from './img/abilities'

class Results extends Component {
    constructor(props) {
        super(props)

        console.log(abilityIcons['sova']['Recon_Bolt'])
    }

    renderVideoBlock(data) {
        if (data.hide) {
            return <div key={data.key} className="imgBlocks"></div>
        } 

        return (
            <div key={data.videoUrl} className="imgBlocks">
                <img onClick={() => { this.props.openPopup(data) }} className="imgPreviewBlock" src={data.previewImageUrl}/>
                {data.abilityName && <img className="lineup-ability" src={abilityIcons[this.props.globalState.selectedAgent][data.abilityName]} />}
                <div className="imgBlocksBottom">
                    <span onClick={() => { this.props.openPopup(data) }} className="lineup-title">{data.title}</span>
                    <img 
                        className={`bookmark-icon ${data.favorite ? 'bookmark-icon-selected' : ''}`} 
                        src={data.favorite ? bookmark_filled : bookmark} 
                    />
                </div>
            </div>
        )
    }

    render() {
        const { allData, selectedSource, selectedAgent, selectedMap } = this.props.globalState
        
        let numResults = 0
        let dataToRender = []

        if (selectedMap === 'any' && selectedAgent) {
            for (const mapName of Object.keys(allData[selectedSource][selectedAgent])) {
                numResults += Object.keys(allData[selectedSource][selectedAgent][mapName]).length

                for (const [videoUrl, videoData] of Object.entries(allData[selectedSource][selectedAgent][mapName])) {
                    dataToRender.push({
                        ...videoData,
                        videoUrl,
                        mapName,
                    })
                }
            }
        }
        else if (selectedAgent && selectedMap) {
            numResults = Object.keys(allData[selectedSource][selectedAgent][selectedMap]).length
            for (const [videoUrl, videoData] of Object.entries(allData[selectedSource][selectedAgent][selectedMap])) {
                dataToRender.push({
                    ...videoData,
                    videoUrl,
                    mapName: selectedMap,
                })
            }
        }

        dataToRender = dataToRender.sort((a, b) => b.score - a.score)

        if (dataToRender.length % 3 !== 0) {
            for (let i = 0; i < dataToRender.length % 3; i++) {
                dataToRender.push({ hide: true, key:`hide-${i}` })
            }
        }

        return(
            <>
                <h3>Found {numResults} results</h3>
                <div className="Results-Block">
                    {dataToRender.map(data => this.renderVideoBlock(data))}
                </div>
            </>
        )
    }
}

export default Results
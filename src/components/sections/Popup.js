import React, { Component } from "react";
import { cancel } from '../../assets/img'
import '../../styles/components/Popup.css';
// import * as abilitiesImgs from './img/abilities'

class Popup extends Component {
    // async post(key, value, videoId) {
    //     try {
    //         const myHeaders = new Headers();
    //         myHeaders.append("Content-Type", "application/json");
    
    //         const saveRes_raw = await fetch("http://localhost:3002/setAdditionalData", {
    //             method: "POST",
    //             headers: myHeaders,
    //             body: JSON.stringify({
    //                 source: this.props.globalState.selectedSource,
    //                 agent: this.props.globalState.selectedAgent,
    //                 map: this.props.globalState.selectedMap,
    //                 videoUrl: videoId,
    //                 key,
    //                 value,
    //             }),
    //             redirect: "follow",
    //         });
    //         const saveRes = await saveRes_raw.json();
    //         console.log(saveRes);
    //     } 
    //     catch (error) {
    //         console.error(error);
    //     }
    // }
    

    renderVideo(videoId, videoTitle) {
        return (
            <>
                <h3 className="videoTitle">{videoTitle}</h3>
                <iframe 
                    title={videoTitle}
                    className="videoFrame"
                    src={'https://iframe.videodelivery.net/'+videoId}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>

                {/* RAZMETKA to add video to db */}
                {/* <div>
                    <p style={{ backgroundColor: 'black' }}>Ability:</p>
                    {Object.keys(abilitiesImgs[this.props.selectedAgent]).map(abilityName => {
                        return <img onClick={() => {
                            this.post('ability', abilityName, videoId)
                        }} style={{ cursor: "pointer", backgroundColor: 'black' }} width="40px" src={abilitiesImgs[this.props.selectedAgent][abilityName]}/>
                    })}
                </div>
                <br />
                <div>
                    <p style={{ backgroundColor: 'black' }}>Side:</p>
                    {['attack', 'defence', 'both'].map(side => (<p onClick={() => {
                        this.post('side', side, videoId)
                    }} style={{ cursor: "pointer", backgroundColor: 'black' }}>{side}</p>))}
                </div> */}
            </>
            
        )

        // 'https://iframe.videodelivery.net/{id}'
       
    }

    render() {
        const { popupData, closePopup } = this.props;
        return (
          popupData === null ? null : (
            <div onClick={closePopup} id="popupWrapper">
              <div id="popup">
                <img
                  className="popupClose"
                  src={cancel}
                  onClick={closePopup}
                  alt="close"
                />
                {this.renderVideo(popupData.videoUrl, popupData.title)}
              </div>
            </div>
          )
        );
      }
}

export default Popup
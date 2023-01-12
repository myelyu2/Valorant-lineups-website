import React, { Component } from 'react'
import '../../styles/components/Sides.css'

class Sides extends Component {

    renderSide() {
        const { selectedSide } = this.props.globalState

        return (
            <div>
                <ul className={`ListEl ${selectedSide === 'all' ? 'ListEl-selected' : ''}`}
                    onClick={ () => {
                        this.props.setGlobalState({
                            selectedSide: 'all' !== selectedSide ? 'all' : 'all',
                        })
                    }}
                > All</ul>

                <ul className={`ListEl ${selectedSide === 'attack' ? 'ListEl-selected' : ''}`}
                    onClick={ () => {
                        this.props.setGlobalState({
                            selectedSide: 'attack' !== selectedSide ? 'attack' : 'all',
                        })
                    }}
                > Attack</ul>

                <ul className={`ListEl ${selectedSide === 'defence' ? 'ListEl-selected' : ''}`}
                    onClick={ () => {
                        this.props.setGlobalState({
                            selectedSide: 'defence' !== selectedSide ? 'defence' : 'all',
                        })
                    }}
                > Defence</ul>
            </div>
        )
    }

    
    render () {
        return (
            <div>
               {this.renderSide()}
            </div>
        )
    }
}

export default Sides
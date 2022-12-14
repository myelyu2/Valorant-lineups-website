import React, { Component } from 'react'
import './Favorites.css'

class Favorites extends Component {
    renderFavorites() {
        const { selectedFavorite } = this.props.globalState

        return (
            <div>
                <ul className={`ListElFav ${selectedFavorite === 'all' ? 'ListElFav-selected' : ''}`}
                    onClick={ () => {
                        this.props.setGlobalState({
                            selectedFavorite: 'all',
                        })
                    }}
                > Show All</ul>

                <ul className={`ListElFav ${selectedFavorite === 'favorite' ? 'ListElFav-selected' : ''}`}
                    onClick={ () => {
                        this.props.setGlobalState({
                            selectedFavorite: 'favorite' !== selectedFavorite ? 'favorite' : 'all',
                        })
                    }}
                > Favorites only</ul>

            </div>
        )
    }

    
    render () {
        return (
            <div>
               {this.renderFavorites()}
            </div>
        )
    }
}

export default Favorites
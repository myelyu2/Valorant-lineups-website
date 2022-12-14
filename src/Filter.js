import './Filter.css';
import Maps from './Maps'
import Agents from './Agents'
import Sides from './Sides'
import Abilities from './Abilities'
import Favorites from './Favorites';

function Filter(props) {
    return(
        <div className="Filter">
            <div className='left-side-filter'>
                <h1 className='Filter-h1'>Map</h1>
                <Maps globalState={props.globalState} setGlobalState={props.setGlobalState} />
            </div>

            <div className='right-side-filter'>
                <h1 className='Filter-h1'>Agent</h1>
                <Agents globalState={props.globalState} setGlobalState={props.setGlobalState} />
                <h1 className='Filter-h1'>Abilities</h1>
                <Abilities globalState={props.globalState} setGlobalState={props.setGlobalState}/>

                <div className='container'> 
                    <div className='left-side'>
                        <h1 className='Filter-h1'>Side</h1>
                        <Sides globalState={props.globalState} setGlobalState={props.setGlobalState}/>
                    </div>
                    <div className='right-side'>
                        <h1 className='Filter-h1'>Favorites</h1>
                        <Favorites globalState={props.globalState} setGlobalState={props.setGlobalState} /> 
                    </div>                    
                </div>
               
            </div>
        </div>
    )
}

export default Filter;
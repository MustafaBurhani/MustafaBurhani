import { useContext } from "react";

import { Typewriter } from 'react-simple-typewriter'
import bannerImage from '../../assets/banner.jpg';
import './bannerView.scss';
import { SideBarContext } from '../../Provider/SidebarContext';
import GlobalVariables from "../../Common/globalVariables";

export default function bannerView() {
    const { sideBarState, setsideBarState } = useContext(SideBarContext);

    return <div className="banner-section" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: '100% 100vh', backgroundRepeat: 'no-repeat' }}>

        <button className="drawer-button" onClick={() => setsideBarState(sideBarState == 'close' ? 'open' : 'close')}>
            {
                sideBarState == 'close' ?
                    <i className='fa-solid fa-bars'></i> :
                    <i className='fa-solid fa-x'></i>
            }
        </button>

        <div>
            <h1 className="color-white mb-0 owner-name">{GlobalVariables.ownerName}</h1>
            <h2 className="color-white mt-0 typewriter-text">
                I'm
                <span style={{ marginLeft: '10px' }}>
                    <Typewriter words={
                        GlobalVariables.ownerSkills
                    }
                        loop='false'
                    />
                </span>
            </h2>
        </div>

    </div>;
}
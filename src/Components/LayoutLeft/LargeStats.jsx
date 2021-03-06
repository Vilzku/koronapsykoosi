import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import { faViruses } from '@fortawesome/free-solid-svg-icons'

function LargeStats(props) {

    let hcdList = props.hcdList;
    let vaccinations = props.vaccinations;

    // Loading icon
    if(hcdList.length === 0 || vaccinations.length === 0) {
        return (
            <div className="LargeStats loading">
                <FontAwesomeIcon icon={faSpinner} spin className="LoadIcon" />
            </div>
        );
    }

    // Date for vaccination tooltip
    let date;
    if(vaccinations.length > 0) {
        date = new Date(vaccinations[0].date);
        date = date.getUTCDate() + "." + (date.getUTCMonth()+1) + "." + date.getUTCFullYear();
    } else {
        date = "2021"
    }

    return (
        <div className="LargeStats">

            <div className="cases">
                <div className="iconContainer">
                    <FontAwesomeIcon icon={faViruses} className="VirusesIcon" />
                </div>
                <span className="number">
                     { hcdList.length > 0 ? hcdList[14].cases : "" }
                </span>
                <div className="title"> Tapaukset</div>
            </div>

            <div className="vaccinations">
                <div className="iconContainer">
                    <FontAwesomeIcon icon={faSyringe} className="SyringeIcon" />
                </div>
                <span className="number">
                     { vaccinations.length > 0 ? vaccinations[6].shots : "--"}
                </span>
                <div className="tooltipContainer">
                    <span className="tooltip">?</span>
                    <span className="tooltiptext">Helsingin Sanomat { date }</span>
                </div>  
                <div className="title">Rokotukset</div>
            </div>

        </div>
    );
}

export default LargeStats;
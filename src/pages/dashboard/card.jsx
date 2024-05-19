import React from 'react';

const Card = ({currentValue,title,desc,icon,lastweekValue,lastmonthValue}) => {
    return (
                <div className="col-12 col-md-6 col-lg-3 dashboard_card_parent">
                    <div className="card text-dark mb-3 dashboard_card" >
                        <div className="card-body row">
                          <div className="col-9">
                            <h4>{currentValue}</h4>
                            <h6 className="card-title text_truncate">{title}</h6>
                            <small className="card-title text_truncate">{desc}</small>
                          </div>
                          <div className="col-3 d-flex justify-content-center align-items-center">
                            <i className={`${icon} card_icon`}></i>
                          </div>
                        </div>
                    </div>
                    <div className="card text-dark mb-3 dashboard_card d-flex flex-row" >
                        <div className="card-body py-1 row">
                            <small className="m-0 d-block text_truncate">  <b>{lastweekValue}</b> در هفته گذشته</small>
                            <small className="m-0 d-block text_truncate">  <b>{lastmonthValue}</b> در ماه گذشته</small>
                        </div>
                    </div>
                </div>
    );
}

export default Card;

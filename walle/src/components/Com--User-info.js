//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components

//------------------------------ import styles and images
import "./styles/UserInfo.scss";
import userPic from "../images/userpic.jpg";

const UserInfo = (props) => {
  return (
    <Fragment>
      <div className="UserInfo">
        <div className="UserInfo__nav">
          <img className="UserInfo__img" src={userPic} alt="" />
          <button className="main-button">Editar</button>
        </div>
        <div className="UserInfo__description">
          <div className="UserInfo__data">
            <h2 className="UserInfo__name">{props.userName}</h2>
            <p>{props.email}</p>
            <p>{props.phone}</p>
          </div>
          <div className="UserInfo__direction">
            <div className="input">
              <label className="input-label" htmlFor="">
                Ciudad:
              </label>
              <input className="input-text" type="text" />
            </div>
            <div className="input">
              <label className="input-label" htmlFor="">
                Dirección:
              </label>
              <input className="input-text" type="text" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserInfo;

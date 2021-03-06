//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import styles and images
import "../assets/components-style/UserInfo.scss";
import userPic from "../assets/images/userpic.jpg";

//------------------------------------ COMPONENT ------------------------------------//
const UserInfo = ({ userName, email, phone }) => {
  return (
    <Fragment>
      <div className="UserInfo">
        <div className="UserInfo__nav">
          <img className="UserInfo__img" src={userPic} alt="" />
          <button className="main-button">Editar</button>
        </div>
        <div className="UserInfo__description">
          <div className="UserInfo__data">
            <h2 className="UserInfo__name">{userName}</h2>
            <p>{email}</p>
            <p>{phone}</p>
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

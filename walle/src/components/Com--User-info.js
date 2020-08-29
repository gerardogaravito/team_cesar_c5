//------------------------------ import libraries
import React, { Component, Fragment } from "react";

//------------------------------ import components

//------------------------------ import styles and images
import "./styles/UserInfo.scss";
import userPic from "../images/userpic.jpg";

class UserInfo extends Component {
  render() {
    return (
      <Fragment>
        <div className="UserInfo">
          <div className="UserInfo__nav">
            <img className="UserInfo__img" src={userPic} alt="" />
            <button className="main-button">Editar</button>
          </div>
          <div className="UserInfo__description">
            <div className="UserInfo__data">
              <h2>Pepita Perez</h2>
              <p>PepitaPerez@gmail.com</p>
              <p>+57 3004486870</p>
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
  }
}

export default UserInfo;

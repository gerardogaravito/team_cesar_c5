import React from 'react';


import './styles/RecipeCardCarruselHome.css';
import PhotoFood from '../images/Photo-food.png'


class CardInformation extends React.Component{
    render(){
        return(
            <section>
              <div className="Card-information">
                    <h1>Lorem ipsum</h1>
                    <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className="Card-backgroundt"></div>
              </div>
          </section>
        )
    }
}
class RecipeCardCarruselHome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
    render() {
      return (
        <level className="Card-container">
        <div className="CardImage-food" onMouseOver={this.handleClick}>
            <img src={PhotoFood} alt="PhotoFood"/>
        </div>
        {this.state.isToggleOn ? '' : <CardInformation onClose={this._closeModal}/>}
        </level> 
      );
    }
  }
export default RecipeCardCarruselHome;
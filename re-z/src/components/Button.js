import React from 'react'; //se usa la librería react porque escribiremos jsx

//los componentes son clases, por ello, class Button; y extiende a la clase React.Component
class Button extends React.Component {
  render() { //todos los componentes requieren almenos este método, define el resultado que se verá en pantalla
    return <button>Button 20</button>;
  }
}

export default Button //hay que exportar el archivo/componente
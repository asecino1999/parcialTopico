import React from 'react';
//import logo from './logo.svg';
import './App.css';
import * as Ut from  './Utiles';
interface IState{
  lista:string[];
  sexo:number;
  nivel:Ut.Utiles
}
class App extends React.Component<{},IState>{
  constructor(props:any) {
    super(props)
    this.state={
      lista:[],
      nivel:new Ut.Nivel1(),
      sexo:0,
    }
  }
  setOperacion(inp:Ut.Utiles){
    var lista = inp.obtenerLista(this.state.sexo);
    this.setState({lista:lista,nivel:inp})
  }
  setSexo(sex:number){
    var lista = this.state.nivel.obtenerLista(sex);
    this.setState({lista:lista,sexo:sex})
  }
  render(){
    var nivel=[new Ut.Nivel1(),
              new Ut.Nivel2(),
              new Ut.Nivel3(),
              new Ut.Nivel4(),
              new Ut.Nivel5(),
              ]

    return (<div>
      <div>sexo: 
        <button onClick={()=>this.setSexo(1)} >varon </button>
        <button onClick={()=>this.setSexo(0)}>mujer</button>
      </div>
      <div>
        nivel
        {nivel.map((element,index) => {
          return(
            <div key={"elemten"}>
              <button onClick={()=>this.setOperacion(element)}>{"nivel"+(index+1)}</button>
            </div>
          )
        })}
      </div>
      <div>
        {this.state.lista.map(element => {
            return(<div>
             {element}
            </div>)
        })}
      </div>
    </div>)
  }
}
export default App;

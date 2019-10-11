import React from 'react';
import DatePicker from 'react-date-picker';
//import logo from './logo.svg';
import './App.css';
import * as Cli from './Cliente'
interface IState{
  date:Date;
  tempo:Cli.IPaquete| null;
  output:string[];
}
class App extends React.Component<{},IState> {
  constructor(props:any) {
      super(props);
      this.state={
        date:new Date(),
        output:[],
        tempo:null,
        
      }
  }
  setDate (date:any){
    var date2:Date=date;
    var tempo =new  Cli.CreadorConcreto().InsaciarPaquete(date2);
    this.setState({ date:date , tempo:tempo,output:tempo.tarifa()})
  }

  setOutput (){
    if(this.state.tempo)
    {
      var tempo:Cli.IPaquete = this.state.tempo;

      this.setState({output:tempo.tarifa()})
    }
  }

  getTemp(){
    if(this.state.tempo)
      return (this.state.tempo.name)
  }
  render (){
    
    return (<div>
      <div>
        seleccione fecha 

        
      <DatePicker
          onChange={(date)=>this.setDate(date)}
          value={this.state.date}
        />
         
      </div>

      {this.getTemp()}
      <div>
        {this.state.output.map(element => {
            return (<div>
              {element}
              </div>
              )
        })}
      </div>
    </div>)
  }
}

export default App;

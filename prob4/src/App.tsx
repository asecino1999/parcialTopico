import React from 'react';
//import logo from './logo.svg';
import './App.css';
import * as filter from "./Filtros"
//import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {text} from './input_def'
interface IState{
  in:string,
  out:string,
  list:bot[]
}
interface bot{
  name:string;
  action(inp:string):string;
  //constructor(name2:string){
  //  this.name=name2;
  //}
}
class App extends React.Component<{},IState> {
  constructor(props:any) {
    super(props)
    var Filtar2=(inp:string,list:bot[])=>{
      
      var out:string=""
      var inp2:string= inp ||this.state.in;
      //console.log(inp || this.state.in)
      if(inp!==""){
        out = inp2
        
        list.forEach(ele => {
          
          out=ele.action(out)
        });
  
      }
  
      console.log("out "+ out)
      return out;
    }
    this.state={
      in:text,
      out:Filtar2(text,[{name:"dolar a sol",action:new filter.DolarSol().filtrar}]),
      list:[{name:"dolar a sol",action:new filter.DolarSol().filtrar}]
    }
  }

  setIn(ev:React.ChangeEvent<HTMLTextAreaElement>){
    this.setState({in:ev.target.value,out:this.Filtar(ev.target.value)})
  }
  setList (ele:bot){
    var list =this.state.list;
    list.push(ele)
    this.setState({list:list, out:this.Filtar()})
  }
  Filtar(inp?:string):string{
    var list =this.state.list;
    var out:string=""
    var inp2:string= inp ||this.state.in;
    //console.log(inp || this.state.in)
    if(inp!==""){
      out = inp2
      
      list.forEach(ele => {
        
        out=ele.action(out)
      });

    }

    console.log("out "+ out)
    return out;
  }

  RenderFilter(){
    var list=this.state.list;
    if(list.length>0)
    return(
      <Container>
          <Row>
          {
            list.map((element:bot,index:number) => {
              return (
                <Col  className = "Col2"  key={element.name+index+"2"}  >
                  {element.name+" "}
                </Col>
              )
            })
          }
          </Row>
        </Container>
    )
    else{
      return (
        <div className="Col2">ninguno</div>
      )
    }
  } 


  render(){
    var butons:bot[]=[
      {name:"espacio",action:new filter.filtrarEspacio().filtrar },
      {name:"capi ",action:new filter.Capitalice().filtrar},
      {name:"corregir error ",action:new filter.filtrarCorrect().filtrar},
      {name:"dolar a sol",action:new filter.DolarSol().filtrar},
      {name:"email ",action:new filter.filtrarCorreo().filtrar},
      {name:"Upercase  ",action:new filter.UpperCase().filtrar},
      {name:"Lowerrcase  ",action:new filter.LowCase().filtrar},
      {name:"Lowerrcase  ",action:new filter.LowCase().filtrar},
      {name:"delete tags ",action:new filter.DeleteHtml().filtrar},
      {name:"get links ",action:new filter.GetLink().filtrar},
      {name:"filtrar xml  ",action:new filter.FiltroXML().filtrar},
    ]
    


    return(
      <div>
        <Container>
          <Row>
          {butons.map((element:bot,index:number) => {
          return (
            <Col  key={element.name+index} className="Col">
              <button onClick={ ()=>this.setList(element)  }  >{element.name}</button>
            </Col>
          )
        })}
          </Row>
        </Container>


        <div>lista de filtros : </div>

        
        {this.RenderFilter()}
        

        
          
        
        <br/>
        <div>input:</div>
        <textarea value={this.state.in}  onChange={(ev)=>this.setIn(ev)}  cols={30} rows={10}></textarea>
        <br/>
        {/* Nota  en classname =  out 
            se le agrego una propidad
            para que no filte el espacio por defecto 
            white-space: pre-wrap;
         */}
        <div>Output:</div>
        <div className="Out" >{this.state.out} </div>


      </div>
    )
  }
}

export default App;

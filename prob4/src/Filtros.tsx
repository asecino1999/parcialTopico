var correct = require("./correct.json")

export abstract class Filter {

    abstract filtrar(inp: string): string
}


export class DolarSol extends Filter {

    filtrar(inp: string): string {

        var temp = inp.match(/\$(\s)*[0-9]+(\,[0-9]*)*(\.[0-9]*)*/g) || [];
        temp.forEach((element: string) => {
            var num = new String(element).match(/[0-9]+(\,[0-9]*)*(\.[0-9]*)*/)
            if (num) {
                var value = parseFloat(num[0]) * 3.38
                inp = inp.replace(element, "s/" + value)
            }
        });
        return inp//.replace()
    }
}

export class Capitalice extends Filter {// primera en mayuscula 
    filtrar(inp: string): string {
        var temp: string[] = inp.split(/\s+/)

        temp = temp.map((element: string) => {
            var first = element.charAt(0);
            return first.toUpperCase() + element.substr(1)
        });
        var ret = temp.reduce((a: string, b: string) => a + " " + b)

        return ret;
    }
}


export class filtrarEspacio extends Filter {

    filtrar(inp: string): string {
        var exp: RegExp = /\s+/;
        var temp = inp.split(exp)
        var ret = temp.reduce((a: string, b: string) => a + " " + b)

        console.log(temp)
        return ret
    }
}



export class filtrarCorrect extends Filter {
    filtrar(inp: string): string {
        for (const key in correct) {
            if (correct.hasOwnProperty(key)) {
                //console.log(key)
                //console.log(inp.search(key))
                inp = inp.replace(key, correct[key])
            }
        }

        return inp
    }
}
export class filtrarCorreo extends Filter {
    filtrar(inp: string): string {

        var exp: RegExp = /.*\@.*\..*/gm
        var temp = inp.match(exp) || [""]
        inp = temp.reduce((a: string, b: string) => a + "\n" + b)
        return inp
    }
}

export class UpperCase extends Filter {
    filtrar(inp: string): string {
        return inp.toUpperCase();
    }
}
export class LowCase extends Filter {
    filtrar(inp: string): string {
        return inp.toLowerCase();
    }
}
export class Comments extends Filter {
    filtrar(inp: string): string {
        // primero // liego /* */  # fdf
        var exp: RegExp = /(\/\/.*\n)|\/\*[\s\S]*?\*\/|(\#.*\n)/g
        var temp = inp.match(exp) || [""]
        //console.log("temp",temp)
        inp = temp.reduce((a: string, b: string) => a + "\n" + b)
        return inp
    }
}
export class DeleteHtml extends Filter {
    filtrar(inp: string): string {

        return inp.replace(/\<.*?\>|\<\/.*?\>/g, "")
    }
}
export class GetLink extends Filter {
    filtrar(inp: string): string {

        var exp: RegExp = /(http|https)\:\/\/\S+/g
        var temp = inp.match(exp) || [""]
        //console.log("temp",temp)
        inp = temp.reduce((a: string, b: string) => a + "\n" + b)
        return inp
    }
}

export class FiltroXML extends Filter {
    filtrar(inp: string): string {

        var exp: RegExp = /(\<[\s\S]*?\>)[\s\S]*?(<\/[\s\S]*?>)/
        var temp = inp.match(exp) || [""]
        //console.log("temp",temp)
        inp = temp[0].replace(/(\<[\s\S]*?\>)|(<\/[\s\S]*?>)/g, "")
        return inp
    }
}

export class LineNum extends Filter {
    filtrar(inp: string): string {
        var temp: string[] = inp.split(/\n/g)
        inp = temp.reduce((a, b, index) => a + "\n" + (index + 1) + " " + b);
        return inp
    }
}
export class Used extends Filter {
    filtrar(inp: string): string {
        var temp: string[] = inp.match(/[a-zA-Z][a-zA-Z][a-zA-Z]+/g) || []

        var conter = temp.map((ele: string ): number => {
            return (inp.match(ele)||[]).length
        })
        console.log(conter)
        if (conter.length > 0) {
            var max = conter.reduce((max: number, b: number, index: number) => conter[index] > conter[max] ? index : max)
            return max > 0 ? temp[max] : ""
        }else
            return ""
    }
}

var text = `
JustMonika JustMonika JustMonika JustMonika JustMonika JustMonika JustMonika JustMonika JustMonika  
JustMonika JustMonika JustMonika JustMonika JustMonika JustMonika JustMonika JustMonika JustMonika  
JustMonika JustMonika JustMonika JustMonika JustMonika JustMonika JustMonika JustMonika JustMonika  
export class filtrarCorrect extends Filter {
    filtrar(inp:string):string{
        var exp:RegExp=/[^\S-]*\s+/
        var temp = inp.split(exp);
        console.log(temp)
        return ""
    }
}
//ddffd
#4565
/*fgdfg lk dfgd
gdfgdfgd 
fgf*/
uon
qeu
$ 34324.456
dsdfdf@hghg.kjkl
dsdfdf@hghg.kjkl

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

https://stackoverflow.com/questions/2788112/what-is-the-regular-expression-for-not-whitespace-and-not-a-hyph/en

`
var text2 = `
435 {+}
453
+tyyu

`

console.log("log", new Used().filtrar(text2))


console.log("me compiladon")
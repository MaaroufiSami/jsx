import logo from './logo.svg';
import './App.css';
import '../src/style.css' 
//import myVideo from ''

import myimage from '../src/private.jpg'

function App() {
  return(
  <>
    <div style={{border:"solid(1px)black",maxwidth:"100vw"}}>
    
    <h1 className="titlered"> Your name here</h1>
    <br/>
    <img src={"/inpublic.png"}/>

    <br/>

 <img src={myimage} />
 </div>
 
 <video width="320" height="240" controls>

    <source src={{myVideo}} />
 </video>
 
</>
  )
}

export default App;

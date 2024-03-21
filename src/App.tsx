
import './App.css';
import Greet from './components/Greet';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/oscar';
import { Button } from './components/Button';

function App() {

  return (
    <div className="App">
        <Greet name={'Prashant'} mssgCount={10} isLoggedin={true}/>
        <Status status='error'/>
        <Heading children={'Hii'}/>


        <Oscar>{/*If we want to send a react component as a prop itself Then we need to declare the type in the Oscar tsx file as React.ReactNode*/}
          <Heading children='hii'/>
        </Oscar>

        <Button handleClick={(event)=>{
            console.log('Button clicked',event)
          }}/>
          
        
    </div>
  );
}

export default App;

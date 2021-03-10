import logo from './logo.svg';
import './App.css';
import { ping, actions } from "./redux/actions";
import { useDispatch, useSelector} from "react-redux"

function App() {
  let data = useSelector(state=>state);
  let dispatch = useDispatch();
console.log("data",data)

const clickHandler = () => {
  dispatch(ping())
}

const fetchData = () => {
  dispatch(actions.getData("daniyalnagori"))
}



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {String(data?.isPinging)}
       <button onClick={clickHandler} >ping</button>
       <button onClick={fetchData} >fetch data</button>
      </header>
    </div>
  );
}

export default App;

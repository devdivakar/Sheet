import logo from './logo.svg';
import { Switch, Route, withRouter, BrowserRouter} from 'react-router-dom';
import Sheet from './views/Sheet/Sheet'
// import View2 from '../src/views/View2/View2'

import './App.css';

const App = ()=>{
  let columns = ['A','B','C','D','E','F','G','H','I','J']
  let rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
  return (
    <div>
      <Sheet rows = {rows} columns = {columns}/>
   </div>

  );
}

export default App;

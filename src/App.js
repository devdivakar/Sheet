import logo from './logo.svg';
import { Switch, Route, withRouter, BrowserRouter} from 'react-router-dom';
import Sheet from './views/Sheet/Sheet'
import View2 from '../src/views/View2/View2'

import './App.css';

const App = ()=>{
  let columns = ['A','B','C','D','E','F','G','H','I','J']
  let rows = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      <Sheet rows = {rows} columns = {columns}/>
   </div>

  );
}

export default App;

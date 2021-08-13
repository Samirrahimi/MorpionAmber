import React, {useState} from 'react';
import './App.css';
import Grille from './component/Grille'

function App() {
  const [player, setplayer]=useState(1)
  // this.state={
  //   player:1
  //   // grille={
  //   //   case1={
  //   //     check=-1
  //   //   },
  //   //   case2={
  //   //     check={false}
  //   //   },
  //   //   case3={
  //   //     check={false}
  //   //   },
  //   //   case4={
  //   //     check={false}
  //   //   },
  //   //   case5={
  //   //     check={false}
  //   //   },
  //   //   case6={
  //   //     check={false}
  //   //   },
  //   //   case7={
  //   //     check={false}
  //   //   },
  //   //   case8={
  //   //     check={false}
  //   //   },
  //   //   case9={
  //   //     check={false}
  //   //   },
  //   // },
  // }
  return (
    <div className="App">
      <Grille/>
    </div>
  );
}

export default App;

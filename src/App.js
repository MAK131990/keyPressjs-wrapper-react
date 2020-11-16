import React, { useState } from 'react';
import './App.css';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import useKeyPress from './useKeyPress';
import Modal from './Modal'
// import useOrderCountHook from './useOrderCount';

function comparer(otherArray){
  return function(current){
    return otherArray.filter(function(other){
      return other.id == current.id && other.name == current.name
    }).length == 0;
  }
}

function App() {
  // const orderHook = useOrderCountHook(10)
  const keyPressHook = useKeyPress();
  const [showHelp, setShowHelp] = useState(false)
  const [combosRegistered, setCombos] = useState([])

  keyPressHook.addCombo('shift h', () => {
    setShowHelp(true)
  })

  const addCombination = (ListOfCombos) => {
    let temp = [];
    let s;
    ListOfCombos.forEach(keyList => {
      s = keyPressHook.addCombo(keyList.keysCombo, keyList.cbFunc);
      // temp.push({ id: keyList.keysCombo, val: s, func: keyList.functionality, name: keyList.componentName })
      temp.push({ id: keyList.keysCombo, val: s, func: keyList.functionality, name: keyList.componentName })
    })
    // let tempCom = { ...combosRegistered }
    // tempCom[compId] = [...temp];
    setCombos((prev) => {
      return [ ...prev, ...temp ]
    })
  }



  const removeCombination = (listToRemove) => {
    let temp = [];
    let updateComboTemp = []
    listToRemove.forEach(x=>{
      temp.push(x.val)
      updateComboTemp.push({name:x.name, key: x.id})
    })
    keyPressHook.removeCombos(temp);
    console.log(updateComboTemp);

    let tempCombo = [...combosRegistered]
    // console.log(JSON.stringify(temp))
    // console.log(JSON.stringify(listToRemove))
    // newTmp = []

    // temp = []
    // for (let i = 0; i < Object.keys(tempCombo).length; i++) {
    //   for (let j = 0; j < tempCombo[i].length; j++) {
    //     temp.push(tempCombo[i][j])
    //   }
    // }
    let newList = tempCombo.filter(comparer(listToRemove))

    setCombos([...newList])
  }


  const closeModal = () => {
    setShowHelp(false)
  }

  // console.log('total', combosRegistered)

  return (
    <div className="App">
      <ComponentA id={0} tabIndex={0} combosRegistered={combosRegistered} addCombination={addCombination} />
      <ComponentB id={1} tabIndex={1} combosRegistered={combosRegistered} addCombination={addCombination} />
      <div>press "shift-h" for help</div>
      {showHelp && <Modal close={closeModal} combos={combosRegistered} removeCombination={removeCombination}/>}
    </div>
  );
}

export default App;

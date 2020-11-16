import React, { useEffect, useRef } from 'react';
// import useKeyPress from './useKeyPress';
import './App.css'


function ComponentB({ id, tabIndex, combosRegistered, addCombination }) {
    // const [combosRegistered, setCombos] = useState([])
    // const keyPressHook = useKeyPress()
    const refContainer = useRef();
    // const [combosToRemove, setCombosToRemove] = useState([])

    const ListOfCombos = [
        {
            keysCombo: 'shift s',
            functionality: 'Changes background to yellow',
            componentName: 'Component B',
            cbFunc: () => {
                if (refContainer.current === document.activeElement) {
                    refContainer.current.style.background = 'yellow';
                    console.log('shift s pressed')
                }
            }
        },
        {
            keysCombo: 'shift x',
            functionality: 'Changes background to grey',
            componentName: 'Component B',
            cbFunc: () => {
                if (refContainer.current === document.activeElement) {
                    refContainer.current.style.background = 'grey';
                    console.log('shift x pressed')
                }
            }
        },
        {
            keysCombo: 'shift z',
            functionality: 'Changes background to orange',
            componentName: 'Component B',
            cbFunc: () => {
                if (refContainer.current === document.activeElement) {
                    refContainer.current.style.background = 'orange';
                    console.log('shift z pressed')
                }
            }
        }
    ]

    // const addCombination = () => {
    //     let temp = [];
    //     let s;
    //     ListOfCombos.forEach(keyList => {
    //         s = keyPressHook.addCombo(keyList.keysCombo, keyList.cbFunc);
    //         temp.push({ id: keyList.keysCombo, val: s, func: keyList.functionality })
    //     })
    //     setCombos([...temp])
    // }

    // const removeCombos = () => {
    //     let temp = []
    //     combosToRemove.forEach(id => {
    //         combosRegistered.forEach(combo => {
    //             if (id == combo.id) {
    //                 temp.push(combo.val)
    //             }
    //         })
    //     })
    //     console.log(temp);
    //     keyPressHook.removeCombos(temp)
    // }

    // const checkBoxChanged = (e, keys) => {
    //     let temp = [...combosToRemove];
    //     if (e.target.checked) {
    //         temp.push(keys);
    //     } else {
    //         temp = temp.filter(x => x != keys)
    //     }
    //     setCombosToRemove([...temp])
    // }

    useEffect(() => {
        addCombination(ListOfCombos)
    }, [])
    return (
        <div
            ref={refContainer}
            className="TestC2"
            style={{ display: 'flex', height: 100, width: '100%', border: '1px solid red', justifyContent:'space-evenly' }}
            id="TestC2"
            tabIndex={tabIndex}
        >
            ComponentB
            {/* <div  style={{display:"flex", flexDirection:'column'}}>
                {combosRegistered && combosRegistered.map(x => {
                return <div key={x.val.keys.join("-")}>
                        <span>{x.val.keys.join("-")}</span>
                </div>
            })
            } 
            </div> */}
            <div  style={{display:"flex", flexDirection:'column'}}>
                {combosRegistered && combosRegistered.filter(x=>{
                    return x.name=='Component B'
                }).map(x => {
                return <div key={x.val.keys.join("-")}>
                        <span>{x.val.keys.join("-")}</span>
                </div>
            })
            } 
            </div>
            {/* {combosRegistered && combosRegistered.map(x => {
                return <div style={{display:"flex", flexDirection:'column'}}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <input type="checkbox" onChange={(e) => {
                            checkBoxChanged(e, x.id);
                        }} />
                        <span>{x.val.keys.join("-")}</span>
                    </div>
                    <span>{x.func}</span>
                </div>
            })
            } */}
            {/* <button onClick={() => { removeCombos() }}>Remove</button> */}
        </div>
    );
}

export default ComponentB;

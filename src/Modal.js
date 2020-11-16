import React, { useState } from 'react';

export default function Modal({ close, combos, removeCombination }) {
    const [combosToRemove, setCombosToRemove] = useState([])
    const checkBoxChanged = (e, id) => {
        let temp = [...combosToRemove];
        if (e.target.checked) {
            temp.push(id);
        } else {
            temp = temp.filter(x => !(x.id == id.id && x.name == id.name))
        }
        setCombosToRemove([...temp])
    }
    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'grey', opacity: 0.7,
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
            onClick={() => { close() }}
        >
            <div style={{ backgroundColor: 'white', flex: 1, padding: 60, margin: 100 }} onClick={(e) => { e.stopPropagation() }}>
                <h2>Shortcut help</h2>
                {combos && combos.map(x=>{
                    return <div style={{display:'flex', flexDirection:'column', border:'1px solid grey'}}>
                    <b>{x.name}</b>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <span>{x.id}</span>---
                        <span>{x.func}</span>
                    </div>
                    <input type="checkbox" onChange={(e) => {
                                        checkBoxChanged(e, x);
                                    }} />
                    <br/>
                    </div>
                })

                }
                {/* {combos && Object.keys(combos).map(key => {
                    return <>
                        <h3>{JSON.stringify(combos[key][0].name)}</h3>
                        <ul>
                            {combos[key].map(combination => {
                                return <li>
                                    <input type="checkbox" onChange={(e) => {
                                        checkBoxChanged(e, combination);
                                    }} />
                                    <span>{combination.id}</span>----
                                    <span>{combination.func}</span>
                                </li>
                            })}
                        </ul>
                    </>
                })

                } */}
                <span>Note: Click on component to get focus and then hit shortcuts :) </span><br /><br />
                <button onClick={(e) => { close(); e.preventDefault() }}>Close</button>
                {combosToRemove.length > 0 &&
                    <button onClick={(e) => { removeCombination(combosToRemove); close(); e.preventDefault() }}>Remove</button>
                }
            </div>
        </div>
    )
}
import React, { useEffect, useState, useContext, createContext, useReducer, useMemo,useRef } from 'react'
const CountConent = createContext()
function Hooks() {
    let [count, setCount] = useState(0)
    // const [count1, dispath] = useReducer((state, action) => {
    //     switch (action) {
    //         case 'add':
    //             return state+1;
    //         default :
    //             return state;
    //     }
    // }, 0)
    // useEffect(()=>{
    //     console.log(123);
    // },[count])
    let input=useRef(null)
    return (
        <div onClick={() => setCount(count + 1)}>{count}
            <Child name={count} ts="TS"></Child>
            {/* <CountConent.Provider value={(a)=>{console.log(a);
        }}>
            <Child></Child>
        </CountConent.Provider> */}
        <div onClick={()=>{console.log(input);
        }} ref={input}>798</div>
        </div>
        // <div onClick={() =>  dispath('add') }>
        //     {count1}
        // </div>
    )
}
function Child({name,ts}) {
    // let count = useContext(CountConent)
    function test() {
        console.log(123);
    }
    const T = useMemo(() => test(), [ts])

    return <div>
        {name + 5}
        {ts}
    </div>
}
export default Hooks
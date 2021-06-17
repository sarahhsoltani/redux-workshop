import React from 'react'
import Moins from '../actions/moins';
import Plus from '../actions/plus'
 import { useDispatch, useSelector} from 'react-redux'
 function Test() {
     const dispatch =useDispatch()
     const value=useSelector(state=>state)
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={()=>dispatch(Plus())}>Plus</button>
            <button onClick={()=>dispatch(Moins())}>Moins</button>

        </div>
    )
}
export default Test;
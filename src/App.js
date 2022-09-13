import {useState,useEffect} from 'react';
import { fetchAdvice } from "./fetchAdvice";

const App = () =>{
    const [Advice, setAdvice] = useState({slip: {advice:"w8ting",id:218}});
    const [NewAdvice, setNewAdvice] = useState(0);
    useEffect(
        ()=>{
            fetchAdvice().then((data)=>setAdvice(data))
        },[NewAdvice]
    );
    return(
        <div className='app'>
            <div className="card">
                <h1 className="heading">{Advice.slip.advice}</h1>
                <button
                    className="button"
                    onClick={()=>setNewAdvice(!NewAdvice)}
                    >
                        <span>
                            gimme advice 
                        </span>
                </button>
            </div>
        </div>
    );
}

export default App ;

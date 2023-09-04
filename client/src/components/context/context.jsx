import { useState } from "react";
import { createContext } from "react";

export const Datacontext=createContext();

const Dataprpvider=()=>{

const [acount,setacount]=useState();

    <datacontext.Provider value={{
        acount,
        setacount
    }
}></datacontext.Provider>
}

export default Dataprpvider;

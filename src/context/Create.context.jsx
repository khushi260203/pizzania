import { createContext, useEffect, useState } from "react"

export const reatecontext = createContext(null)
const ReateContext = (props) => {
    const [data,setdata] = useState([])

    
  return (
    
        <reatecontext.Provider value={{data,setdata}}>
    {props.children}
   </reatecontext.Provider>
      
    
  )
}

export default Create.context

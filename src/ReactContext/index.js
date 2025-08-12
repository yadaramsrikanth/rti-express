import {createContext} from "react"

const ReporterActivistContext=createContext({
    isReporterModal:false,
    setIsReporterModal:()=>{},
   isActivistModal:false,
    setIsActivistModal:()=>{},
})

export default ReporterActivistContext
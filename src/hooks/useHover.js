import { useEffect,useRef } from "react"

const useHover=()=>{
const targetElement=useRef(null)
useEffect(()=>{
targetElement.current.addEventListener("mouseenter",()=>{
console.log("hovered")
})
},[])
return targetElement
}

export default useHover

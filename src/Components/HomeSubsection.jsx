import { useEffect } from "react"

// eslint-disable-next-line react/prop-types
export default function HomeSubsection(className){

    useEffect(()=>{
        //console.log('className :>> ', className);
    })

    return (
        <h4 className={`subsection_2 ${className.className}`}>This is subsection two</h4>
    )

}
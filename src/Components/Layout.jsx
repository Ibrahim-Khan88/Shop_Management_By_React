/* eslint-disable react/prop-types */

import { useEffect } from "react"
import Header from "./Header"

// eslint-disable-next-line react/prop-types
export default function Layout(props) {
    useEffect(() => {
       // console.log('props :>> ', props);
    })
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}
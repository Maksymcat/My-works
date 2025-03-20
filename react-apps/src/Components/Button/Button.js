import React from "react";

const Button = ({onClick}) => {
return(
    <>
    <button className="me-3" onClick={onClick}>Click me!</button>
    </>
)
}
export default Button;
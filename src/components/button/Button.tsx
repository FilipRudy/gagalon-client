import "../button/button.css"
import {NavLink} from "react-router-dom";

interface ButtonProps {
    message: string;
    path: string;
}
export const Button = (props: ButtonProps) => {

    return (
        <NavLink to={props.path} className="button-light jetbrains-mono">
            {props.message}
        </NavLink>
    );
}
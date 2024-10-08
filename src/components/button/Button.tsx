import "../button/button.css";
import { NavLink } from "react-router-dom";

interface ButtonProps {
    message: string;
    path: string;
    onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <NavLink to={props.path} className="button-light font-unbolded" onClick={handleClick}>
            {props.message}
        </NavLink>
    );
};

import { useEffect, useState } from "react";

export const useNavbarBackground = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    useEffect(() => {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            if (isExpanded) {
                navbar.classList.add("navbar-no-background");
            } else {
                navbar.classList.remove("navbar-no-background");
            }
        }
    }, [isExpanded]);

    return { isExpanded, handleToggle };
};


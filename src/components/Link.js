import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";


function Link({to, children, className, activeClassName}) {

    const {navigate, currentPath} = useNavigation();
    const classes = classNames(
        'text-blue-500 flex', 
        className,
        currentPath === to && activeClassName
        );

    const handleClick = (event) => {
       event.preventDefault();
       navigate(to);
    };


    return <a className={classes} onClick={handleClick}>{children}</a>
}

export default Link;
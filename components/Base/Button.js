import Link from "next/link";
import ClassNames from "classnames";
import styles from "../../styles/Button.module.scss";

function Button ({className, href, children,onClick,disabled}){
    return(
        <>
        {href ? (
            <Link href={href}>
            <a className={ClassNames(className,styles.btn)}>
                {children}
            </a>
            </Link>
        ):(
            <button
                className={ClassNames(className,styles.btn)}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        )}
        </>
    );
}

export default Button;
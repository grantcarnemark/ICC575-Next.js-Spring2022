import classNames from 'classnames/bind'
import Link from 'next/link';







import styles from './button.module.scss'


let cx = classNames.bind(styles);



// deconstruct props


export default function Button ({label, variant, path}){

    let buttonClasses = cx({
        btn : true,
        primary : variant === "primary",
        secondary : variant === "secondary",

    });

    return <button className={buttonClasses}> 
    <Link href={path}>
 <a> 
    {label}

 </a>

    </Link>
    </button>
}
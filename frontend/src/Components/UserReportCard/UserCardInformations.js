import style from "./UserCardInfo.module.css";

export default function UserCardInfo({children}) {
    return (
       <ul className={style.userCardInfo}>
           {children}
       </ul>
    )
}
import style from "./UserCardDate.module.css";

export default function UserCardDate({children}) {
    return (
        <li className={style.userCardDate}>{children}</li>
    )
}
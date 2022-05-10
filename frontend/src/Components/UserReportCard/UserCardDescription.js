import style from "./UserCardDescription.module.css";

export default function UserCardDescription({children}) {
    return <li className={style.userCardDescription}>{children}</li>;
}
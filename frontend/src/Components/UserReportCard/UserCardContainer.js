import style from "./UserCardContainer.module.css";

export default function UserCardContainer({children}) {
    return (<div className={style.userCardContainer}>{children}</div>)
}
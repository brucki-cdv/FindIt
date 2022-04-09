import style from "./MutedLink.module.css";

const MutedLink = (props) => {
    return (
        <div className={style.mutedLink}>
            <a href={props.href}>{props.children}</a>
        </div>
    )
}

export default MutedLink;
import style from "./MainMapWrapper.module.css";

const MainMapWrapper = (props) => {
    return (
        <div className={style.mainMapContainer}>
            {props.children}
        </div>
    )
}

export default MainMapWrapper;
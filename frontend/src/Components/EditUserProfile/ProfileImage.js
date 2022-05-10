import style from "./ProfileImage.module.css";

export default function ProfileImage({ src, alt }) {
  return <img src={src} alt={alt} className={style.profileImage}/>;
}

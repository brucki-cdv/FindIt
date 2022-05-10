import style from "./UserCardImage.module.css";

export default function UserCardImage({ src, alt, firstName, lastName }) {
  return (
    <div className={style.userCardImage}>
      <img src={src} alt={alt} />
      Katarzyna Nowak
    </div>
  );
}

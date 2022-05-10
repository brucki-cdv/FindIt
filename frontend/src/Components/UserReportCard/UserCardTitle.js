import style from "./UserCardTitle.module.css";

export default function UserCardTitle({ children }) {
    function add3Dots(string, limit)
    {
      var dots = "...";
      if(string.length > limit)
      {
        // you can also use substr instead of substring
        string = string.substring(0,limit) + dots;
      }
     
        return string;
    }
    return <li className={style.userCardTitle}>{add3Dots(children, 20)}</li>;
}

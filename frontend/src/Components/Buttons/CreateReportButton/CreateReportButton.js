import styles from "./CreateReportButton.module.css";
import { IoAddOutline } from "react-icons/io5";

export default function CreateReportButton({ onClick }) {
  return (
    <div className={styles.createReportButton} onClick={onClick}>
      <button>
        {" "}
        <IoAddOutline size={25} />
        Create Report
      </button>
    </div>
  );
}

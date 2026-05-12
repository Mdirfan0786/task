import Styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={Styles.loaderContainer}>
      <div className={Styles.spinner}></div>

      <p>Loading page...</p>
    </div>
  );
}

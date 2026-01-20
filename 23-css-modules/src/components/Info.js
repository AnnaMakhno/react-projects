import "./Info.css";

import styles from "./info.module.css";
// {
//     "info": "info_info__M9Hjh",
//     "myOtherButton": "info_myOtherButton__rmowB"
// }

console.log(styles);

function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from Info component</h1>
            <button className={styles.myOtherButton}>Click me</button>
        </div>
    );
}

export default Info;

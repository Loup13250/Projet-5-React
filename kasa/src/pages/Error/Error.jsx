import styles from "./Error.module.css";

function Error() {
  return (
    <main role="main" className={styles.main}>
      <h2 className={styles.error}>404</h2>
      <div className={styles.text}>
        Oups ! La page que vous demandez n'existe pas.
      </div>
    </main>
  );
}
export default Error;

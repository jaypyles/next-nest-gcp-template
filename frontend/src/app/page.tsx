import styles from "./page.module.css";
import UserTable from "./components/user-table";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UserTable />
      </main>
    </div>
  );
}

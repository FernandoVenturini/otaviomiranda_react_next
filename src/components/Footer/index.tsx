import styles from "./styles.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="http://">Entenda como funciona a tecnica pomodoro 🍅</a>
            <a href="http://">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com coracao 💚</a>
        </footer>
    );
}
 
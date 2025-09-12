import styles from './styles.module.css';

type DefaultButtonProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

<<<<<<< HEAD
export function DefaultButton({
    icon, 
    color='green', 
    ...props}: DefaultButtonProps) {

=======
export function DefaultButton({icon, color='green', ...props}: DefaultButtonProps) {
>>>>>>> c7f3d88 (insering dark theme #36)
    return (
        <>
            <button className={`${styles.button} ${styles[color]}`} {...props}>
                {icon}
            </button>
        </>
    );
}
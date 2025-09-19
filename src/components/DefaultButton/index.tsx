import styles from './styles.module.css';

type DefaultButtonProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

<<<<<<< HEAD
export function DefaultButton({
    icon, 
    color = 'green', 
    ...props
}: DefaultButtonProps) {
=======

export function DefaultButton({icon, color, ...props}: DefaultButtonProps) {
    color = color || 'green'; 
>>>>>>> 0fa8ad1 (Your local changes)
    return (
        <button className={`${styles.button} ${styles[color]}`} {...props}>
            {icon}
        </button>
    );
};
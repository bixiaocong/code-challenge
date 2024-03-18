import styles from './styles.module.scss';
import { useTheme } from 'utils/themeContext';

interface buttonProps {
    type?: 'primary' | 'default';
    disabled?: boolean;
    block?: boolean;
    center?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
const Button: React.FC<buttonProps> = (props: buttonProps) => {
    const {
        type = 'default',
        disabled = false,
        block = false,
        center = false,
        onClick = () => {},
        children,
        className,
        style,
    } = props;
    const { theme } = useTheme();
    return (
        <button
            className={`${styles[theme]} ${styles.button} ${styles[type]} ${className} ${disabled ? styles.disabled : ''} ${block ? styles.block : ''} ${center ? styles.center : ''} `}
            style={style}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
const ButtonGroup: React.FC = () => {
    const { toggleTheme } = useTheme();
    return (
        <>
            <Button type="primary" onClick={toggleTheme} block>
                Toggle Theme
            </Button>
            <Button type="default" center>
                Cancel
            </Button>
        </>
    )
}
export default ButtonGroup;
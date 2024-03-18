import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from 'utils/themeContext';

interface ModalProps {
    show?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
    title?: string;
    style?: React.CSSProperties;
    className?: string;
    maskClosable?: boolean;
    mask?: boolean;
    hasClose?: boolean;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    const {
        show = true,
        onClose,
        children,
        title,
        style,
        className = '',
        maskClosable = false,
        mask = true,
        hasClose = true,
    } = props;
    
    if (!show) {
        return null;
    }
    const { theme } = useTheme();
    return (
        <div className='modal' style={style}>
            {mask && (
                <div
                className={styles.mask}
                ></div>
            )}
            {hasClose}
            <div className={`${styles.content} ${styles[theme]} ${className}`}>
                {title && <h2 className={`${styles.title}  ${styles[theme]}`}>{title}</h2>}
                {hasClose && (
                <span
                    className={`${styles.close} ${styles[theme]}`}
                >
                </span>
                )}
                {children}
            </div>
        </div>
    );
}
export default Modal;

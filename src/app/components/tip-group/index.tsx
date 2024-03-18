import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from 'utils/themeContext';

interface TipProps {
    content: string;
}

const Tip: React.FC<TipProps> = (props: TipProps) => {
    const {
        content
    } = props;
    const { theme } = useTheme();
    return (
        <span className={`${styles[theme]} ${styles.tip}`}>{content}</span>
    );
}

const TipGroup: React.FC = (props) => {
    return (
        <div className={styles.group}>
            <Tip content="Max" />
            <Tip content="1/2" />
            <Tip content="1/3" />
        </div>
    );
}
export default TipGroup;

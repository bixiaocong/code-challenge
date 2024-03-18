import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from 'utils/themeContext';

interface TransformItemProps {
    label: string;
    icon: string;
    content: string;
    tail?: boolean;
}

const TransformItem: React.FC<TransformItemProps> = (props: TransformItemProps) => {
    const {
        content,
        label,
        icon,
        tail
    } = props;
    const { theme } = useTheme();
    return (
        <div className={styles.item}>
            <div className={styles.label}>{label}</div>
            <div className={`${styles[theme]} ${styles.content}`}>
                <img className={styles.icon} src={icon} />
                <span className={styles.text}>{content}</span>
                { tail && <img className={styles.tail} src='/4.png' /> }
            </div>
        </div>
    );
}
// 实现一个箭头
const Arrow: React.FC = () => {
    return (
        <img className={styles.arrow} src='/3.png'/>
    );
}

const Tansform: React.FC = () => {
    return (
        <div className={styles.transform}>
            <TransformItem label="From Consmos Hub" icon='/1.png' content="atom1xy5y...m6wwz9a" />
            <Arrow />
            <TransformItem label="To Osmosis" icon='/2.png' content="osmo1xy5y...w9a" tail />
        </div>
    );
}
export default Tansform;

import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from '../../_utils/themeContext';

interface SelectAmountProps {
   amount: string;
}

const SelectAmount: React.FC<SelectAmountProps> = (props: SelectAmountProps) => {
    const {
        amount
    } = props;
    const { theme } = useTheme();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }
    return (
        <div className={styles.container}>
            <div className={styles.label}>
                Select amount
                <span>Available <em>2 Atom</em></span>
            </div>
            <div className={`${styles.content} ${styles[theme]}`}>
                <img className={styles.icon} src='/1.png' />
                <input onChange={onChange} className={`${styles.input} ${styles[theme]}`} type="text" value={amount} />
                <div>
                    <span className={styles.atom}>ATOM</span>
                    <span className={styles.tip}> ≈ $1,013</span>
                </div>
            </div>
        </div>
    );
}

export default SelectAmount;

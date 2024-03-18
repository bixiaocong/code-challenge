import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from 'utils/themeContext';


interface NoteProps {
    minites: string;
}

const TimeIcon: React.FC = () => {
    return (
        <div className={styles.icon}></div>
    );
}
const TimeNote: React.FC<NoteProps> = (props: NoteProps) => {
    const {
        minites,
    } = props;
    const { theme } = useTheme();
    return (
        <div className={`${styles.note} ${styles[theme]}`}> 
            <TimeIcon />
            Estimated time: 
            <span className={styles.bold}> {minites} seconds</span>
        </div>
    );
}
export default TimeNote;

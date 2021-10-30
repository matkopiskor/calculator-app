import { FC, useCallback } from 'react';
import styles from './styles.module.css';

interface IDisplayProps {
    value: string;
    cursorPosition: number;
}

export const Display: FC<IDisplayProps> = ({ value, cursorPosition }) => {

    const onInputFocus = useCallback((e) => {
        console.log('changing position', cursorPosition);
        e.selectionStart = cursorPosition;
        e.selectionEnd = cursorPosition;
    }, [cursorPosition]);

    return (
        <div className={styles.display}>
            <input
                type="text"
                placeholder="Try me..."
                className={styles.displayInput}
                autoFocus
                onBlur={(e) => e.target.focus()}
                onFocus={onInputFocus}
            />
        </div>
    );
};

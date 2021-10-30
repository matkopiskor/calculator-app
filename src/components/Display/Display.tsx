import { createRef, FC, useCallback, useEffect } from 'react';
import styles from './styles.module.css';

interface IDisplayProps {
    value: string;
    cursorPosition: number;
    error: boolean;
}

export const Display: FC<IDisplayProps> = ({ value, cursorPosition, error }) => {
    const inputRef = createRef<HTMLInputElement>();
    const onInputBlur = useCallback((e) => {
        e.target.focus();
    }, []);
    useEffect(() => {
        inputRef.current?.setSelectionRange(cursorPosition, cursorPosition);
    }, [cursorPosition, inputRef]);

    return (
        <div className={styles.display}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Try me..."
                className={styles.displayInput}
                autoFocus
                onBlur={onInputBlur}
                value={value}
                onChange={() => {}}
            />
            {error && <span className={styles.error}>ERROR!</span>}
        </div>
    );
};

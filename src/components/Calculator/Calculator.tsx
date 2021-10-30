import { FC, useCallback } from 'react';
import { useCalculator } from '../CalculatorProvider/CalculatorProvider';
import { Display } from '../Display/Display';
import { Keyboard } from '../Keyboard/Keyboard';
import styles from './styles.module.css';

export const Calculator: FC = () => {
    const { expression, cursorPosition } = useCalculator();

    const performAction = useCallback((type: 'symbol' | 'action', label: string, actionKey?: string) => {
        console.log(type, label, actionKey);
    }, []);

    return (
        <div className={styles.calculator}>
            <Display value={expression} cursorPosition={cursorPosition} />
            <Keyboard performAction={performAction} />
        </div>
    );
};

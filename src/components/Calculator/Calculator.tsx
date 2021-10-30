import { FC, useCallback } from 'react';
import { ActionKey } from '../../utils/constants';
import { useCalculator } from '../CalculatorProvider/CalculatorProvider';
import { Display } from '../Display/Display';
import { Keyboard } from '../Keyboard/Keyboard';
import styles from './styles.module.css';

export const Calculator: FC = () => {
    const {
        expression,
        cursorPosition,
        updateValue,
        deleteSymbol,
        clearValue,
        moveCursorLeft,
        moveCursorRight,
        calculateExpression,
        error,
        clearError,
    } = useCalculator();
    const performAction = useCallback(
        (type: 'symbol' | 'action', label: string, actionKey?: ActionKey) => {
            if (error) {
                clearError();
            }
            if (type === 'symbol') {
                updateValue(label, cursorPosition);
            } else if (!!actionKey) {
                switch (actionKey) {
                    case 'DELETE':
                        deleteSymbol(cursorPosition);
                        break;
                    case 'RESET':
                        clearValue();
                        break;
                    case 'MOVE_LEFT':
                        moveCursorLeft();
                        break;
                    case 'MOVE_RIGHT':
                        moveCursorRight();
                        break;
                    case 'CALC': {
                        calculateExpression();
                        break;
                    }
                }
            }
        },
        [calculateExpression, clearError, clearValue, cursorPosition, deleteSymbol, error, moveCursorLeft, moveCursorRight, updateValue]
    );

    return (
        <div className={styles.calculator}>
            <Display value={expression} cursorPosition={cursorPosition} error={error} />
            <Keyboard performAction={performAction} />
        </div>
    );
};

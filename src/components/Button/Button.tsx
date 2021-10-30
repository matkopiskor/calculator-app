import { FC, useCallback, useMemo } from 'react';
import { Button as IButton } from '../../utils/constants';
import styles from './styles.module.css';

interface IButtonProps {
    button: IButton;
    performAction: (type: 'symbol' | 'action', label: string, actionKey?: string) => void;
}

export const Button: FC<IButtonProps> = ({
    button,
    performAction,
}) => {

    const onButtonClick = useCallback(() => {
        const actionKey = button.type === 'action' ? button.actionKey : undefined;
        performAction(button.type, button.label, actionKey);
    }, [button, performAction]);

    return (
        <div onClick={onButtonClick} className={`${styles.button} ${styles[button.type]}`}>{button.label}</div>
    );
};

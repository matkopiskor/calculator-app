import { FC } from 'react';
import styles from './styles.module.css';
import { FirstSegList, NumSegList, SecondSegList, ActionSegList } from '../../utils/constants';
import { Button } from '../Button/Button';

interface IKeyboardProps {
    performAction: (type: 'symbol' | 'action', label: string, actionKey?: string) => void;
}

export const Keyboard: FC<IKeyboardProps> = ({ performAction }) => {
    return (
        <div className={styles.keyboard}>
            <div className={styles.firstSeg}>
                {FirstSegList.map((button, idx) => (
                    <Button key={idx} button={button} performAction={performAction} />
                ))}
            </div>
            <div className={styles.secondSeg}>
                {SecondSegList.map((button, idx) => (
                    <Button key={idx} button={button} performAction={performAction} />
                ))}
            </div>
            <div className={styles.thirdSeg}>
                <div className={styles.numSeg}>
                    {NumSegList.map((button, idx) => (
                        <Button key={idx} button={button} performAction={performAction} />
                    ))}
                </div>
                <div className={styles.actionSeg}>
                    {ActionSegList.map((button, idx) => (
                        <Button key={idx} button={button} performAction={performAction} />
                    ))}
                </div>
            </div>
        </div>
    );
};

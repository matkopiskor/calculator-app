import { FC } from 'react';
import styles from './styles.module.css';
import { FirstSegmentList, ThirdSegmentList, SecondSegmentList, FourthSegmentList, ActionKey } from '../../utils/constants';
import { Button } from '../Button/Button';

interface IKeyboardProps {
    performAction: (type: 'symbol' | 'action', label: string, actionKey?: ActionKey) => void;
}

export const Keyboard: FC<IKeyboardProps> = ({ performAction }) => {
    return (
        <div className={styles.keyboard}>
            <div className={styles.firstSegment}>
                {FirstSegmentList.map((button, idx) => (
                    <Button key={idx} button={button} performAction={performAction} />
                ))}
            </div>
            <div className={styles.secondSegment}>
                {SecondSegmentList.map((button, idx) => (
                    <Button key={idx} button={button} performAction={performAction} />
                ))}
            </div>
            <div className={styles.thirdAndFourthSegment}>
                <div className={styles.thirdSegment}>
                    {ThirdSegmentList.map((button, idx) => (
                        <Button key={idx} button={button} performAction={performAction} />
                    ))}
                </div>
                <div className={styles.fourthSegment}>
                    {FourthSegmentList.map((button, idx) => (
                        <Button key={idx} button={button} performAction={performAction} />
                    ))}
                </div>
            </div>
        </div>
    );
};

import axios from 'axios';
import { FC, createContext, useState, useCallback, useContext } from 'react';

const baseUrl = 'http://api.mathjs.org/v4/?expr=';

interface ICalculatorContext {
    expression: string;
    setExpression: (expression: string) => void;
    cursorPosition: number;
    setCursorPosition: (position: number) => void;
}

const CalculatorContext = createContext<ICalculatorContext>({} as ICalculatorContext);

export const CalculatorProvider: FC = ({ children }) => {
    const [expression, setExpression] = useState<string>('');
    const [cursorPosition, setCursorPosition] = useState<number>(0);

    return (
        <CalculatorContext.Provider value={{ expression, setExpression, cursorPosition, setCursorPosition }}>
            {children}
        </CalculatorContext.Provider>
    );
};

export const useCalculator = () => {
    const { expression, setExpression, cursorPosition, setCursorPosition } = useContext(CalculatorContext);

    const updateValue = useCallback(
        (symbol: string, position?: number) => {
            if (!position || position === expression.length) {
                const currPosition = expression.length
                setExpression(expression + symbol);
                setCursorPosition(currPosition + 1);
            } else if (position < expression.length) {
                const pref = expression.substring(0, position);
                const suff = expression.substring(position);
                setExpression(pref + symbol + suff);
                setCursorPosition(position + 1);
            }
        },
        [expression, setCursorPosition, setExpression]
    );

    const clearValue = useCallback(() => {
        setExpression('');
        setCursorPosition(0);
    }, [setCursorPosition, setExpression]);

    const deleteSymbol = useCallback(
        (position?: number) => {
            if (!position || position === expression.length) {
                const currPosition = expression.length;
                setExpression(expression.slice(0, -1));
                setCursorPosition(currPosition - 1);
            } else if (position !== 0) {
                const pref = expression.substring(0, position - 1);
                const suff = expression.substring(position);
                setExpression(pref + suff);
                setCursorPosition(position - 1);
            }
        },
        [expression, setCursorPosition, setExpression]
    );

    const showResult = useCallback(
        (result: string) => {
            setExpression(result);
            setCursorPosition(result.length);
        },
        [setCursorPosition, setExpression]
    );

    const encodeExpression = useCallback((currentExpression: string) => {
        const encodedExpression = encodeURI(currentExpression);
        console.log('encodedExpression', encodedExpression);
        return encodedExpression;
    }, []);

    const calculateExpression = useCallback(async () => {
        const encodedExpression = encodeExpression(expression);
        const url = baseUrl + encodedExpression;
        try {
            const result: string = await axios.get(url);
            console.log('result', result);
            showResult(result);
        } catch (error) {
            console.error('Error occured: ', error);
            throw new Error('Something went wrong during calculation');
        }
    }, [encodeExpression, expression, showResult]);

    return {
        expression,
        updateValue,
        clearValue,
        deleteSymbol,
        calculateExpression,
        cursorPosition,
    };
};

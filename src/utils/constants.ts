interface IButtonSymbol {
    type: 'symbol';
    label: string;
    symbolKey: string;
};

interface IButtonAction {
    type: 'action';
    label: string;
    actionKey: 'MOVE_LEFT' | 'MOVE_RIGHT' | 'DELETE' | 'CALC' | 'RESET';
}

export type Button = IButtonSymbol | IButtonAction

export const FirstSegList: Button[] = [
    {
        type: 'symbol',
        label: '(',
        symbolKey: 'OPEN_BRACKET',
    },
    {
        type: 'symbol',
        label: ')',
        symbolKey: 'CLOSE_BRACKET',
    },
    {
        type: 'action',
        label: '<-',
        actionKey: 'MOVE_LEFT',
    },
    {
        type: 'action',
        label: '->',
        actionKey: 'MOVE_RIGHT',
    }
];

export const SecondSegList: Button[] = [
    {
        type: 'symbol',
        label: '/',
        symbolKey: 'DIVIDE',
    },
    {
        type: 'symbol',
        label: '*',
        symbolKey: 'MULTIPLY',
    },
    {
        type: 'symbol',
        label: '-',
        symbolKey: 'SUBTRACT',
    },
    {
        type: 'symbol',
        label: '+',
        symbolKey: 'ADD',
    },
];

export const NumSegList: Button[] = [
    {
        type: 'symbol',
        label: '7',
        symbolKey: '7',
    },
    {
        type: 'symbol',
        label: '8',
        symbolKey: '8',
    },
    {
        type: 'symbol',
        label: '9',
        symbolKey: '9',
    },
    {
        type: 'symbol',
        label: '4',
        symbolKey: '4',
    },
    {
        type: 'symbol',
        label: '5',
        symbolKey: '5',
    },
    {
        type: 'symbol',
        label: '6',
        symbolKey: '6',
    },
    {
        type: 'symbol',
        label: '1',
        symbolKey: '1',
    },
    {
        type: 'symbol',
        label: '2',
        symbolKey: '2',
    },
    {
        type: 'symbol',
        label: '3',
        symbolKey: '3',
    },
    {
        type: 'action',
        label: 'C',
        actionKey: 'RESET',
    },
    {
        type: 'symbol',
        label: '0',
        symbolKey: '0',
    },
    {
        type: 'symbol',
        label: '.',
        symbolKey: 'DOT',
    },
];

export const ActionSegList: Button[] = [
    {
        type: 'action',
        label: 'DEL',
        actionKey: 'DELETE',
    },
    {
        type: 'action',
        label: '=',
        actionKey: 'CALC',
    },
];

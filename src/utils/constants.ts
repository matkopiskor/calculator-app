interface IButtonSymbol {
    type: 'symbol';
    label: string;
};

interface IButtonAction {
    type: 'action';
    label: string;
    actionKey: ActionKey;
}

export type ActionKey = 'MOVE_LEFT' | 'MOVE_RIGHT' | 'DELETE' | 'CALC' | 'RESET'

export type Button = IButtonSymbol | IButtonAction

export const FirstSegmentList: Button[] = [
    {
        type: 'symbol',
        label: '(',
    },
    {
        type: 'symbol',
        label: ')',
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

export const SecondSegmentList: Button[] = [
    {
        type: 'symbol',
        label: '/',
    },
    {
        type: 'symbol',
        label: '*',
    },
    {
        type: 'symbol',
        label: '-',
    },
    {
        type: 'symbol',
        label: '+',
    },
];

export const ThirdSegmentList: Button[] = [
    {
        type: 'symbol',
        label: '7',
    },
    {
        type: 'symbol',
        label: '8',
    },
    {
        type: 'symbol',
        label: '9',
    },
    {
        type: 'symbol',
        label: '4',
    },
    {
        type: 'symbol',
        label: '5',
    },
    {
        type: 'symbol',
        label: '6',
    },
    {
        type: 'symbol',
        label: '1',
    },
    {
        type: 'symbol',
        label: '2',
    },
    {
        type: 'symbol',
        label: '3',
    },
    {
        type: 'action',
        label: 'C',
        actionKey: 'RESET',
    },
    {
        type: 'symbol',
        label: '0',
    },
    {
        type: 'symbol',
        label: '.',
    },
];

export const FourthSegmentList: Button[] = [
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

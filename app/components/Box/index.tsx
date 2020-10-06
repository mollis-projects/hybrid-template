import styled, { css } from 'styled-components';
import { Sizes, Statuses } from '../../typing';

interface BoxProps {
    shadow?: boolean;
    transparent?: boolean;
    size?: keyof Sizes;
    fitted?: boolean;
    selected?: boolean;
    status?: keyof Statuses;
}

const Box = styled.div<BoxProps>`
    ${({
        shadow, transparent, size = 'medium', theme, selected, fitted, status,
    }) => css`
        padding: ${theme.spacing[size]} ${!fitted ? theme.spacing[size] : '4px'};
        width: 100%;
        border-radius: ${theme.borderRadius[size]};
        box-shadow: ${shadow ? '0 4px 12px -1px rgba(0,0,0,.1)' : 'none'};
        background-color: ${() => {
        if (transparent) {
            return 'transparent';
        }

        if (status) {
            return theme.palette.common.statuses[status];
        }

        return theme.palette.common[selected ? 'gray' : 'white'];
    }};
    `};
`;

export default Box;

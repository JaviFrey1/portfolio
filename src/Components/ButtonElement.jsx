import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 50px;
    background: ${({ primary }) => primary ? '#fff' : '#b52c31'};
    white-space: nowrap;
    padding: ${({ big }) => big ? '14px 48px' : '12px 30px'};
    color: ${({ dark }) => dark ? '#b52c31' : '#fff'};
    font-size: ${({ fontBig }) => fontBig ? '20px' : '16px'};
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => primary ? '#b52c31' : '#fff'};
        color: ${({ dark }) => dark ? '#fff' : '#b52c31'};
        border: 2px solid ${({ primary }) => primary ? '#fff' : '#b52c31'};
    }
`;
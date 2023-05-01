import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const Button = styled.button`
    background-color: inherit;
    border: none;
    color: #000;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        color: #65b79a;
    }
    &:disabled {
        color: #aaaaaa;
        cursor: not-allowed;
        &:hover {
            background-color: inherit;
        }
    }
`;

export const PageNumber = styled.button`
    background: none;
    border: none;
    border-bottom: 3px solid ${({ isActive }) => (isActive ? '#65B79A' : 'transparent')};
    padding: 5px 10px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    margin: 0 2px;

    &:hover {
        border-bottom-color: #65b79a;
    }
`;

import styled from 'styled-components';

export const SearchInputContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 1;
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 0 1rem;
    font-size: 16px;
    border: 1px solid rgba(224, 224, 224, 0.6);
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;
    height: 56px;
    box-shadow: 1px 1px 20px 0 rgba(224, 224, 224, 1);

    &:focus {
        border-color: #0070f3;
    }
`;

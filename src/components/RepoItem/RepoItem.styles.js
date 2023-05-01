import styled from 'styled-components';

export const RepoItemContainer = styled.div`
    background-color: #ffffff;
    border: 1px solid rgba(224, 224, 224, 0.6);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.04);
    padding: 40px;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 128px 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 8px 32px;
`;

export const RepoTitle = styled.a`
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: #081f32;

    &:hover {
        text-decoration: underline;
    }
`;

export const RepoInfo = styled.div`
    flex-wrap: wrap;
    margin-top: 12px;
    column-count: 2;
`;

export const InfoItem = styled.span`
    font-size: 14px;
    margin-right: 16px;
    margin-bottom: 6px;
    color: #a5adbb;
    display: flex;
    align-items: center;
    break-inside: avoid-column;

    b {
        font-weight: 600;
        color: #081f32;
    }

    strong {
        font-weight: 400;
        color: #6e798c;
    }

    img {
        width: 24px;
        margin: 0 16px 0 0;
    }
`;

export const RepoImage = styled.div`
    width: 128px;
    grid-row: 1/3;

    img {
        width: 100%;
    }
`;

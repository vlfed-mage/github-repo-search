import React from 'react';
import { RepoItemContainer, RepoTitle, RepoImage, RepoInfo, InfoItem } from './RepoItem.styles';

import star from '../../start.svg';
import user from '../../user.svg';

const RepoItem = ({ repo }) => {
    return (
        <RepoItemContainer>
            <RepoImage>
                <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            </RepoImage>
            <RepoTitle href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                {repo.name}
            </RepoTitle>
            <RepoInfo>
                <InfoItem>{repo.owner.login}</InfoItem>
                <InfoItem>{repo.language}</InfoItem>
                <InfoItem>
                    <strong>{repo.description}</strong>
                </InfoItem>
                <InfoItem>
                    <img src={star} alt='' />
                    <b>{repo.stargazers_count}</b>&nbsp;stars
                </InfoItem>
                <InfoItem>
                    <img src={user} alt='' />
                    <b>{repo.watchers_count}</b>&nbsp;watchers
                </InfoItem>
            </RepoInfo>
        </RepoItemContainer>
    );
};

export default RepoItem;

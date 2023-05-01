import React from 'react';
import { useSelector } from 'react-redux';
import RepoItem from '../RepoItem';
import { RepoListContainer, Processing } from './RepoList.styles';

const RepoList = () => {
    const repositories = useSelector(state => state.repositories.repositories);
    const status = useSelector(state => state.repositories.status);
    const error = useSelector(state => state.repositories.error);

    if (status === 'loading') {
        return <Processing>Loading...</Processing>;
    }

    if (status === 'failed') {
        return <Processing>Error: {error}</Processing>;
    }

    if (repositories.length === 0) {
        return <Processing>По Вашому запиту не знайдено жодного репозиторія</Processing>;
    }

    return (
        <RepoListContainer>
            {repositories.map(repo => (
                <RepoItem key={repo.id} repo={repo} />
            ))}
        </RepoListContainer>
    );
};

export default RepoList;

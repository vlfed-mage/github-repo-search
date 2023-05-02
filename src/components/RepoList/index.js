import React from 'react';
import { useSelector } from 'react-redux';
import RepoItem from '../RepoItem';
import { selectRepositories, selectStatus, selectError } from '../../redux/repositories/selectors';
import { RepoListContainer, Processing } from './RepoList.styles';

const RepoList = () => {
    const repositories = useSelector(selectRepositories);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

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

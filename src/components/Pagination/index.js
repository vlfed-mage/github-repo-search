import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, fetchRepositories } from '../../redux/repositories/repositoriesSlice';
import { Container, Button, PageNumber } from './Pagination.styles';

const Pagination = () => {
    const dispatch = useDispatch();
    const totalPages = useSelector(state => state.repositories.totalPages);
    const currentPage = useSelector(state => state.repositories.currentPage);
    const searchQuery = useSelector(state => state.repositories.searchQuery);
    const status = useSelector(state => state.repositories.status);

    const handlePageChange = page => {
        if (page !== currentPage) {
            dispatch(setCurrentPage(page));
            dispatch(fetchRepositories(`${searchQuery}&page=${page}`));
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <PageNumber key={i} isActive={i === currentPage} onClick={() => handlePageChange(i)}>
                    {i}
                </PageNumber>
            );
        }
        return pageNumbers;
    };

    return status === 'succeeded' ? (
        <Container>
            <Button disabled={currentPage === 1} onClick={handlePrevPage}>
                Previous
            </Button>
            {renderPageNumbers()}
            <Button disabled={currentPage === totalPages} onClick={handleNextPage}>
                Next
            </Button>
        </Container>
    ) : null;
};

export default Pagination;

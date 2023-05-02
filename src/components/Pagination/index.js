import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Container, Button, PageNumber } from './Pagination.styles';
import { selectTotalPages, selectStatus } from '../../redux/repositories/selectors';

const Pagination = ({ currentPage, setCurrentPage }) => {
    const totalPages = useSelector(selectTotalPages);
    const status = useSelector(selectStatus);

    const handlePageChange = useCallback(
        (page) => {
            if (page !== currentPage) {
                setCurrentPage(page);
            }
        },
        [currentPage, setCurrentPage]
    );

    const handlePrevPage = useCallback(() => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    }, [currentPage, handlePageChange]);

    const handleNextPage = useCallback(() => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    }, [currentPage, totalPages, handlePageChange]);

    const renderPageNumbers = useCallback(() => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <PageNumber key={i} isActive={i === currentPage} onClick={() => handlePageChange(i)}>
                    {i}
                </PageNumber>
            );
        }
        return pageNumbers;
    }, [currentPage, totalPages, handlePageChange]);

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

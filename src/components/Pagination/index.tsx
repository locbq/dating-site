import React from 'react';
import BootstrapPagination from 'react-bootstrap/Pagination';

import {
  StyledDiv,
  StyledPaginationItem,
} from './styles';

interface PaginationProps {
  matchesPerPage: number;
  totalMatches: number;
  currentPage: number;
  paginate: (page: number) => void;
}

const Pagination = ({
  matchesPerPage,
  totalMatches,
  currentPage,
  paginate,
}: PaginationProps) => {
  const pageNumbers: number[] = [];
  const pageNumbersWithDots: any[] = [];
  const delta = 2;
  const last = Math.ceil(totalMatches / matchesPerPage);
  const left = currentPage - delta;
  const right = currentPage + delta + 1;
  let l;

  for (let i = 1; i <= last; i++) {
    if ((i === 1 || i === last) || (i >= left && i < right)) {
      pageNumbers.push(i);
    }
  }
  for (const i of pageNumbers) {
    if (l) {
      if (i - l === 2) {
        pageNumbersWithDots.push(l + 1);
      } else if (i - l !== 1) {
        pageNumbersWithDots.push('...');
      }
    }
    pageNumbersWithDots.push(i);
    l = i;
  }

  // simple pagination algorithm thanks to https://gist.github.com/kottenator/9d936eb3e4e3c3e02598

  return (
    <StyledDiv>
      <BootstrapPagination>
        {pageNumbersWithDots.map((page) => (
          page === '...' ? (
            <BootstrapPagination.Ellipsis />
          ) : (
            <StyledPaginationItem
              key={page}
              active={page === currentPage}
              onClick={() => paginate(page)}
            >
              {page}
            </StyledPaginationItem>
          )
        ))}
      </BootstrapPagination>
    </StyledDiv>
  );
};

export default Pagination;

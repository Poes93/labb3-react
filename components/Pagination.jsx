import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination" aria-label="Pagination Navigation">
      <ul className="pagination-list">
        <li
          className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          aria-disabled={currentPage === 1}
        >
          Previous
        </li>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`pagination-item ${currentPage === number ? 'active' : ''}`}
            onClick={() => onPageChange(number)}
            aria-current={currentPage === number ? 'page' : undefined}
          >
            {number}
          </li>
        ))}
        <li
          className={`pagination-item ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          aria-disabled={currentPage === totalPages}
        >
          Next
        </li>
      </ul>
      <style jsx>{`
        .pagination {
          display: flex;
          justify-content: center;
          margin: 1rem 0;
        }
        .pagination-list {
          display: flex;
          list-style: none;
          padding: 0;
        }
        .pagination-item {
          margin: 0 0.5rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          border: 1px solid #ddd;
          border-radius: 4px;
          background-color: #f9f9f9;
        }
        .pagination-item.disabled {
          pointer-events: none;
          opacity: 0.5;
        }
        .pagination-item.active {
          font-weight: bold;
          background-color: #007bff;
          color: white;
          border-color: #007bff;
        }
        .pagination-item:hover:not(.disabled) {
          background-color: #e9ecef;
        }
      `}</style>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

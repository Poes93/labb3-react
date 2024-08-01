import React from 'react';

const NoResults = ({ message }) => {
    return (
        <div className="no-results">
            <p>{message}</p>
            <style jsx>{`
                .no-results {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    text-align: center;
                    font-size: 1.5rem;
                    color: #666;
                }
            `}</style>
        </div>
    );
};

export default NoResults;

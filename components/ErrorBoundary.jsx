import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state to indicate an error has occurred
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error details to an external service or console
        console.error("Error caught by ErrorBoundary:", error);
        console.error("Error info:", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Display fallback UI if an error occurs
            return (
                <div role="alert">
                    <h1>Something went wrong.</h1>
                    <p>Sorry, there was an unexpected error. Please try again later.</p>
                </div>
            );
        }

        // Render children if no error
        return this.props.children;
    }
}

export default ErrorBoundary;

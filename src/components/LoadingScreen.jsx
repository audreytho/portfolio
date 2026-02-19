import React from 'react';

const LoadingScreen = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className="loading-screen">
            <img src="/images/Little-Audrey-Animation.gif" alt="Loading..." className="loading-gif" />
        </div>
    );
};

export default LoadingScreen;

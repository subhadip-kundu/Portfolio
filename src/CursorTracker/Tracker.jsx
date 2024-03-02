import React, { useState, useEffect } from 'react';
import './tracker.css'

const CursorTracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div>
            <p>Cursor Position: {position.x}, {position.y}</p>
            <div className="cursor-container">
                <div className="cursor" style={{
                    left: position.x - 9,
                    top: position.y - 9,
                }} />
            </div>
        </div>
    );
};

export default CursorTracker;

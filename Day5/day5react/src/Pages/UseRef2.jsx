import React, { useEffect, useRef } from 'react';

function FocusInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus the input element on component mount
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type="text" />

            <input
                ref={inputRef}
                type="text"
                placeholder="Focus on me on mount"
            />
        </div>
    );
}

export default FocusInput;

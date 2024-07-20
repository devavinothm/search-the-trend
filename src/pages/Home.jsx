import React, { useState } from 'react';

function Home() {
    const [input, setInput] = useState("");

    // Inline CSS styles
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f0f4f8',
            fontFamily: '"Arial", sans-serif',
        },
        title: {
            fontSize: '2.5rem',
            color: '#333',
            marginBottom: '20px',
        },
        inputBox: {
            width: '300px',
            padding: '10px',
            fontSize: '1.2rem',
            border: 'none',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px',
            outline: 'none',
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Search The Trend</h1>
            <p>Search for the latest trends what you hear</p>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here..."
                style={styles.inputBox}
            />
        </div>
    );
}

export default Home;

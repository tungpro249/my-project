'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Oops! This Page Could Not Be Found</h2>
      <p style={styles.description}>
        Sorry but the page you are looking for does not exist, have been removed,
        name changed or is temporarily unavailable.
      </p>
      <Link href="/">
        <button style={styles.button}>GO TO HOMEPAGE</button>
      </Link>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '100px 20px',
  },
  code: {
    fontSize: '120px',
    fontWeight: 700,
    color: '#d3d3d3',
    letterSpacing: '20px',
    margin: 0,
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0 10px',
  },
  description: {
    color: '#555',
    maxWidth: '500px',
    margin: '0 auto 20px',
    lineHeight: '1.6',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#4d79ff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../styles/globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap.bundle.min.js')
      : null;
  }, []);

  return (
    <html lang="en">
      <body className="bg-dark text-light">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link href="/" className="navbar-brand">Sports Hub</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link href="/teams" className="nav-link">Teams</Link>
              </li>
              <li className="nav-item">
                <Link href="/schedule" className="nav-link">Schedule</Link>
              </li>
              <li className="nav-item">
                <Link href="/gallery" className="nav-link">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

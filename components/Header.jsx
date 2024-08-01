import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          background: #333;
          color: white;
          padding: 1rem;
        }
        nav ul {
          display: flex;
          list-style: none;
          padding: 0;
        }
        nav ul li {
          margin-right: 1rem;
        }
        nav ul li a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </header>
  )
}

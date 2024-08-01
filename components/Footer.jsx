import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2023 Movie Database. All rights reserved.</p>
      <style jsx>{`
        .footer {
          background: #333;
          color: white;
          padding: 1rem;
          text-align: center;
        }
      `}</style>
    </footer>
  );
}

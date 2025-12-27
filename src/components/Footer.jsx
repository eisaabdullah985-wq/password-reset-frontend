import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-light p-3">
      <div className="container text-center">
        <small>
          © {new Date().getFullYear()} SecureAuth App · All rights reserved
        </small>
      </div>
    </footer>
  )
}

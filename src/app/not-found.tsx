import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <main>
      <h2>404</h2>
      <p>This page could not be found.</p>
      <p>
        Go back to <Link href="/">Menu</Link>
      </p>
    </main>
  )
}

export default NotFound

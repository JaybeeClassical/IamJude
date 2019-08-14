import React from 'react'
import { Link } from 'gatsby'

function NotFoundPage() {
  return (
    <div className="NotExistingPage">
      <div className="error-page-wrap">
        <article class="error-page gradient">
          <hgroup>
            <h1>404</h1>
            <h2>oops! page not found</h2>
          </hgroup>
          <button></button><Link to="/" className="btn btn-outline-light rounded-pill mx-5 my-3">Go Back</Link>
        </article>
      </div>
    </div>

  )
}

export default NotFoundPage


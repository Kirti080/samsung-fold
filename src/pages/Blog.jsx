import { Link } from 'react-router-dom'
import { posts, formatDate } from '../data/posts.js'

export default function Blog() {
  return (
    <section>
      <header className="page-header">
        <h2>Blog</h2>
        <p>Notes on building and shipping small sites.</p>
      </header>

      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <article>
              <p className="post-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>{post.readingTime} read</span>
              </p>
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="excerpt">{post.excerpt}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

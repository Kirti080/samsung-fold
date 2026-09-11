import { Link, useParams } from 'react-router-dom'
import { findPost, formatDate } from '../data/posts.js'
import NotFound from './NotFound.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = findPost(slug)

  if (!post) {
    return <NotFound />
  }

  return (
    <article className="prose">
      <header className="page-header">
        <p className="post-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.readingTime} read</span>
        </p>
        <h2>{post.title}</h2>
      </header>

      {post.body.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}

      <p className="back-link">
        <Link to="/blog">← All posts</Link>
      </p>
    </article>
  )
}

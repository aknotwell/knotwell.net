import { formatDate, type Post } from '../blog'

export function PostCard({ post }: { post: Post }) {
  return (
    <a className="entry post-link" href={`#/blog/${post.slug}`}>
      <p className="entry-dates">{formatDate(post.date)}</p>
      <h3>{post.title}</h3>
      {post.summary && <p className="post-summary">{post.summary}</p>}
    </a>
  )
}

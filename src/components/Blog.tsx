import { posts, formatDate } from '../blog'
import { PostCard } from './PostCard'

export function BlogIndex() {
  return (
    <>
      <header className="page-head">
        <h1>Blog</h1>
        <p className="tagline">Notes on things I'm building and learning.</p>
      </header>
      {posts.length === 0 && <p className="tagline">No posts yet — check back soon.</p>}
      {posts.map((p) => (
        <PostCard key={p.slug} post={p} />
      ))}
    </>
  )
}

export function BlogPost({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <header className="page-head">
        <h1>Post not found</h1>
        <a className="more" href="#/blog">← Back to all posts</a>
      </header>
    )
  }

  return (
    <article>
      <a className="more" href="#/blog">← All posts</a>
      <header className="page-head">
        <p className="entry-dates">{formatDate(post.date)}</p>
        <h1>{post.title}</h1>
      </header>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}

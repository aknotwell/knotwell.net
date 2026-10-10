import './App.css'
import { profile } from './resume'
import { useHashRoute } from './useHashRoute'
import { Home } from './components/Home'
import { BlogIndex, BlogPost } from './components/Blog'

function App() {
  const [page, slug] = useHashRoute()
  const onBlog = page === 'blog'

  return (
    <>
      <nav className="topbar">
        <a className="brand" href="#/">{profile.name}</a>
        <div className="topbar-links">
          <a href="#/" className={!onBlog ? 'active' : ''}>About</a>
          <a href="#/blog" className={onBlog ? 'active' : ''}>Blog</a>
        </div>
      </nav>

      <main className="page">
        {onBlog ? slug ? <BlogPost slug={slug} /> : <BlogIndex /> : <Home />}
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}

export default App

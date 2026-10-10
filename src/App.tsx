import './App.css'
import { education, experience, profile, projects } from './resume'
import { useHashRoute } from './useHashRoute'
import { About, EntryPage, Resume } from './components/Pages'
import { BlogIndex, BlogPost } from './components/Blog'

const tabs = [
  { route: '', label: 'About' },
  { route: 'experience', label: 'Experience' },
  { route: 'projects', label: 'Projects' },
  { route: 'education', label: 'Education' },
  { route: 'resume', label: 'Resume' },
  { route: 'blog', label: 'Blog' },
]

function Page({ page, slug }: { page: string; slug?: string }) {
  switch (page) {
    case 'experience':
      return <EntryPage title="Experience" intro="Where I've worked and what I did there." entries={experience} />
    case 'projects':
      return <EntryPage title="Projects" intro="Things I've built on my own time." entries={projects} />
    case 'education':
      return <EntryPage title="Education" intro="Where I'm studying." entries={education} />
    case 'resume':
      return <Resume />
    case 'blog':
      return slug ? <BlogPost slug={slug} /> : <BlogIndex />
    default:
      return <About />
  }
}

function App() {
  const [page = '', slug] = useHashRoute()

  return (
    <>
      <nav className="topbar">
        <a className="brand" href="#/">{profile.name}</a>
        <div className="topbar-links">
          {tabs.map((t) => (
            <a key={t.label} href={`#/${t.route}`} className={page === t.route ? 'active' : ''}>
              {t.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="page">
        <Page page={page} slug={slug} />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}

export default App

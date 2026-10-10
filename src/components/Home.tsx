import { education, experience, profile, projects, skills, type Entry } from '../resume'
import { posts } from '../blog'
import { PostCard } from './PostCard'

function EntryCard({ entry }: { entry: Entry }) {
  return (
    <div className="entry">
      <header className="entry-head">
        <div>
          <h3>{entry.title}</h3>
          <p className="entry-org">
            {entry.org}
            {entry.location && <span> · {entry.location}</span>}
            {entry.tech && <span> · {entry.tech}</span>}
          </p>
        </div>
        {entry.dates && <p className="entry-dates">{entry.dates}</p>}
      </header>
      <ul>
        {entry.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

function Section({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <section>
      <h2>{title}</h2>
      {entries.map((e) => (
        <EntryCard key={e.title + e.org} entry={e} />
      ))}
    </section>
  )
}

export function Home() {
  return (
    <>
      <header className="hero">
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        <nav className="links">
          {profile.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <Section title="Experience" entries={experience} />
      <Section title="Projects" entries={projects} />
      <Section title="Education" entries={education} />

      <section>
        <h2>Skills</h2>
        <dl className="skills">
          {skills.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      {posts.length > 0 && (
        <section>
          <h2>Latest writing</h2>
          {posts.slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
          <a className="more" href="#/blog">All posts →</a>
        </section>
      )}
    </>
  )
}

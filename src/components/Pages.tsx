import { education, experience, profile, projects, type Entry } from '../resume'
import { posts } from '../blog'
import { EntryList, SkillList } from './Entries'
import { PostCard } from './PostCard'

export function About() {
  const [current, ...past] = experience
  const school = education[0]

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

      <p className="about">{profile.about}</p>

      <section>
        <h2>At a glance</h2>
        <dl className="glance">
          {current && (
            <div>
              <dt>Currently</dt>
              <dd>
                {current.title}, <a href="#/experience">{current.org}</a>
              </dd>
            </div>
          )}
          {past.length > 0 && (
            <div>
              <dt>Previously</dt>
              <dd>
                {past.map((e, i) => (
                  <span key={e.title + e.org}>
                    {i > 0 && '; '}
                    {e.title}, <a href="#/experience">{e.org}</a>
                  </span>
                ))}
              </dd>
            </div>
          )}
          {school && (
            <div>
              <dt>Studying</dt>
              <dd>
                {school.title}, <a href="#/education">{school.org}</a> ({school.dates})
              </dd>
            </div>
          )}
          {projects.length > 0 && (
            <div>
              <dt>Building</dt>
              <dd>
                {projects.map((p, i) => (
                  <span key={p.title}>
                    {i > 0 && ', '}
                    <a href="#/projects">{p.title}</a>
                  </span>
                ))}
              </dd>
            </div>
          )}
        </dl>
      </section>

      <section>
        <h2>Skills</h2>
        <SkillList />
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

export function EntryPage({ title, intro, entries }: { title: string; intro: string; entries: Entry[] }) {
  return (
    <>
      <header className="page-head">
        <h1>{title}</h1>
        <p className="tagline">{intro}</p>
      </header>
      <EntryList entries={entries} />
    </>
  )
}

// Everything on one page, for a quick skim.
export function Resume() {
  return (
    <>
      <header className="page-head">
        <h1>Resume</h1>
        <p className="tagline">Everything in one place.</p>
      </header>
      <section>
        <h2>Experience</h2>
        <EntryList entries={experience} />
      </section>
      <section>
        <h2>Projects</h2>
        <EntryList entries={projects} />
      </section>
      <section>
        <h2>Education</h2>
        <EntryList entries={education} />
      </section>
      <section>
        <h2>Skills</h2>
        <SkillList />
      </section>
    </>
  )
}

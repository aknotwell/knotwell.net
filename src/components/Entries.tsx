import { skills, type Entry } from '../resume'

export function EntryCard({ entry }: { entry: Entry }) {
  return (
    <div className="entry">
      <header className="entry-head">
        <div>
          <h3>
            {entry.title}
            {entry.status && <span className="status">{entry.status}</span>}
          </h3>
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

export function EntryList({ entries }: { entries: Entry[] }) {
  return entries.map((e) => <EntryCard key={e.title + e.org} entry={e} />)
}

export function SkillList() {
  return (
    <dl className="skills">
      {skills.map((s) => (
        <div key={s.label}>
          <dt>{s.label}</dt>
          <dd>{s.items.join(', ')}</dd>
        </div>
      ))}
    </dl>
  )
}

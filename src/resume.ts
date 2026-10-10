export type Entry = {
  title: string
  org: string
  location?: string
  dates?: string
  tech?: string
  status?: string
  bullets: string[]
}

export const profile = {
  name: 'Alexander Knotwell',
  tagline: 'Computer Science @ University of Washington',
  links: [
    { label: 'Email', href: 'mailto:alexknot@cs.washington.edu' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/alexander-knotwell' },
    { label: 'GitHub', href: 'https://github.com/aknotwell' },
  ],
  about:
    "I'm a computer science student at the University of Washington who likes building practical tools, from LLM-powered data pipelines to developer tooling and bots. Most recently I helped build an AI teaching assistant at the UW Systems Lab.",
  currently: 'Taking classes, chasing bugs, and debugging my sleep schedule.',
}

export const education: Entry[] = [
  {
    title: 'Bachelor of Science in Computer Science',
    org: 'University of Washington',
    location: 'Seattle, WA',
    dates: 'Sep. 2024 – June 2028',
    bullets: [
      'Relevant courses: Systems Programming, Data Structures & Parallelism, Data Management, Machine Learning, Probability & Statistics.',
    ],
  },
]

export const experience: Entry[] = [
  {
    title: 'Undergraduate Research Assistant',
    org: 'UW Systems Lab',
    location: 'Seattle, WA',
    dates: 'Jan. 2026 – June 2026',
    bullets: [
      'Contributed to ChatCSE, an AI teaching assistant for Allen School courses built on FastAPI and Next.js.',
      'Integrated Google Cloud Text-to-Speech to narrate TA answers, with safe credential handling and error fallback.',
      'Designed Pydantic models for structured LLM output (transcript plus cited slides) via FastAgent.',
      'Rendered LLM-cited lecture slides to images with PyMuPDF and built a slide viewer in React/TypeScript.',
      'Redesigned slide storage to be request-scoped for concurrent users, served via a path-traversal-safe API.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'GoDaddy Inc.',
    location: 'Kirkland, WA',
    dates: 'June 2025 – Sep. 2025',
    bullets: [
      'Built a Python microservice using LLM analysis to process 1,000 support transcripts per batch.',
      'Cut processing time by 83% by refactoring batch operations with multithreading.',
      'Refined LLM prompt templates through iterative output reviews, improving response accuracy.',
      'Automated a PII-secure workflow with GitHub Actions and AWS Secrets Manager.',
      "Built QuickSight dashboards to track support teams' usage of an internal LLM.",
    ],
  },
]

export const projects: Entry[] = [
  {
    title: 'Search Engine & HTTP Server',
    org: 'Systems project',
    status: 'Completed',
    tech: 'C, C++, POSIX sockets',
    bullets: [
      'Built a full-text search engine from the ground up, starting with a doubly-linked list and chained hash table written in C with manual memory management.',
      'Implemented directory crawling, a file parser, and an in-memory inverted index mapping each word to its positions in every document, plus a query shell that ranks multi-word results by term frequency.',
      'Serialized the inverted index to a portable on-disk binary format (big-endian hash tables with a CRC32 checksum) and wrote readers that answer queries directly from multiple index files.',
      'Wrote the networking and request handling for a multithreaded HTTP/1.1 server: IPv4/IPv6 sockets, persistent connections, and request parsing that handles partial reads, serving both search results and static files.',
      'Hardened the server against directory traversal (realpath-based path checks returning 403) and cross-site scripting (HTML-escaping user queries).',
    ],
  },
  {
    title: 'FFN-Bot',
    org: 'Reddit bot',
    status: 'On hold',
    tech: 'Python, PRAW',
    bullets: [
      'Developed a Reddit bot to automatically retrieve and display story metadata, such as word counts and author information, for community members.',
      'Integrated PRAW (Reddit API) to monitor subreddits and respond to metadata requests in real time.',
      'Used the FicHub API to fetch, process, and render story metadata for display in Reddit comments.',
    ],
  },
]

export const skills: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['Python', 'Java', 'C', 'C++', 'SQL', 'TypeScript'] },
  { label: 'Frameworks / Libraries', items: ['FastAPI', 'React', 'Next.js', 'Pydantic', 'FastAgent', 'PyTorch', 'NumPy'] },
  { label: 'Tools', items: ['Git', 'GitHub Actions', 'AWS', 'Google Cloud', 'Linux', 'Valgrind', 'pytest', 'SQLite'] },
]

export type Entry = {
  title: string
  org: string
  location?: string
  dates?: string
  tech?: string
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
    "I'm a computer science student at the University of Washington who likes building practical tools, from LLM-powered data pipelines to developer tooling and bots. Lately I've been working on an AI teaching assistant at the UW Systems Lab.",
}

export const education: Entry[] = [
  {
    title: 'Bachelor of Science in Computer Science',
    org: 'University of Washington',
    location: 'Seattle, WA',
    dates: 'Sep. 2024 – June 2028',
    bullets: [
      'Relevant courses: Systems Programming, Data Structures and Parallelism, Introduction to Data Management, Machine Learning, Discrete Math, Probability and Statistics.',
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
      'Helped develop an automated virtual teaching assistant for Allen School courses using Python and FastAgent to streamline student support.',
      'Designed and implemented a text-to-speech (TTS) service using Google Cloud, integrating it into an existing data-processing pipeline.',
      'Migrated the data pipeline to Pydantic schemas, enforcing type safety and reducing runtime validation errors.',
      'Created a Python module that retrieves and displays specific lecture slides from a PDF database using information from targeted LLM prompts.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'GoDaddy Inc.',
    location: 'Kirkland, WA',
    dates: 'June 2025 – Sep. 2025',
    bullets: [
      'Developed a scalable Python microservice that processes up to 1,000 customer support transcripts per batch by leveraging LLM-powered analysis, generating datasets for business analytics.',
      'Conducted iterative manual reviews of LLM outputs to refine prompt templates, increasing response accuracy and reliability.',
      'Visualized transcript datasets in QuickSight to track support usage of an internal LLM.',
      'Automated a PII-secure workflow via GitHub Actions, integrating AWS Secrets Manager for compliant credential handling.',
      'Optimized processing time by 83% by refactoring batch operations with multithreading.',
    ],
  },
]

export const projects: Entry[] = [
  {
    title: 'Search Engine & HTTP Server',
    org: 'Systems project',
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
    tech: 'Python, PRAW',
    bullets: [
      'Developed a Reddit bot to automatically retrieve and display story metadata, such as word counts and author information, for community members.',
      'Integrated PRAW (Reddit API) to monitor subreddits and respond to metadata requests in real time.',
      'Used the FicHub API to fetch, process, and render story metadata for display in Reddit comments.',
    ],
  },
]

export const skills: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['Java', 'Python', 'SQL', 'C', 'C++'] },
  { label: 'Frameworks / Libraries', items: ['PyTorch', 'NumPy'] },
  { label: 'Developer Tools', items: ['Git', 'GitHub', 'GitHub Actions', 'AWS', 'Linux', 'LaTeX'] },
  { label: 'Databases', items: ['SQLite'] },
]

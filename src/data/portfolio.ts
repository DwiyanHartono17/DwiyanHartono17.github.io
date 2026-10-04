// Single source of truth for portfolio content.
// Every fact below is derived from /root/Dwiyan/cv-extracted.txt.
// No invented facts. The home address and phone number are intentionally excluded.

export const profile = {
  name: 'M. Dwiyan Hartono',
  shortName: 'Dwiyan',
  initials: 'MDH',
  role: 'Senior Fullstack Software Developer',
  tagline: 'Senior Fullstack Software Developer',
  positioning: [
    'Senior Fullstack Developer',
    'Senior Backend Developer',
    'System Analyst',
  ],
  yearsExperience: '5+ years',
  summary:
    "Hello, I'm Dwiyan, a Fullstack Software Developer working in the Information Technology consulting and software house sector. I have more than 5 years of experience in the software development field, building web platforms, backend services, and mobile applications.",
  email: 'm.dwiyan.hartono@gmail.com',
  website: 'www.dwiyanhartono.com',
  websiteUrl: 'https://www.dwiyanhartono.com',
  cvUrl: '/cv.pdf',
  location: 'Bekasi, West Java, Indonesia',
}

export const softSkills = [
  'Communication',
  'Critical Thinking',
  'Analytical Capabilities',
  'Mobile Programming',
]

export const documentationSkills = ['MS Office', 'AI Tools (Vibe Coding)']

// Tech stack grouped, derived only from the stacks listed on CV portfolio projects.
export type TechGroup = {
  key: string
  label: string
  description: string
  items: string[]
}

export const techStack: TechGroup[] = [
  {
    key: 'backend',
    label: 'Backend',
    description: 'Server-side languages and frameworks used across projects.',
    items: [
      'Node.js',
      'Express.js',
      'PHP',
      'CodeIgniter 4',
      'Golang',
      'Java',
      'Spring Boot',
      '.NET',
      'Python',
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    description: 'Web UI libraries, frameworks, and styling tools.',
    items: ['Vue.js', 'Next.js', 'Tailwind CSS', 'HTML', 'Bootstrap'],
  },
  {
    key: 'mobile',
    label: 'Mobile',
    description: 'Cross-platform and native mobile development.',
    items: ['Flutter', 'React Native', 'Kotlin', 'Java', 'Ionic'],
  },
  {
    key: 'database',
    label: 'Database',
    description: 'Relational and cloud data stores.',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Firebase'],
  },
  {
    key: 'api',
    label: 'API & Integration',
    description: 'Service design and third-party payment integrations.',
    items: ['REST API', 'dtPrint', 'Xendit', 'BRDGX'],
  },
  {
    key: 'tools',
    label: 'Tools & Documentation',
    description: 'Supporting tools for delivery and documentation.',
    items: ['MS Office', 'AI Tools (Vibe Coding)'],
  },
]

// Employment + education timeline (chronological order).
export type TimelineItem = {
  id: string
  period: string
  title: string
  org: string
  kind: 'work' | 'education'
  points: string[]
}

export const timeline: TimelineItem[] = [
  {
    id: 'smk',
    period: '2012 – 2015',
    title: 'SMK / SLTA',
    org: 'SMK Pelayaran',
    kind: 'education',
    points: ['Secondary vocational education.'],
  },
  {
    id: 'bbplk',
    period: '2016',
    title: 'Database Programming',
    org: 'BBPLK-Bekasi',
    kind: 'education',
    points: ['Vocational training program in database programming.'],
  },
  {
    id: 'avisha',
    period: '2017 – 2018',
    title: 'Staf IT',
    org: 'PT Avisha',
    kind: 'work',
    points: ['Created an HR-System.', 'Application maintenance.'],
  },
  {
    id: 'anagata',
    period: '2018 – 2023',
    title: 'Fullstack Software Developer',
    org: 'PT Anagata',
    kind: 'work',
    points: [
      'Performed business analysis.',
      'Coding.',
      'Performed maintenance.',
      'Person in charge.',
      'Created documentation.',
    ],
  },
  {
    id: 's1',
    period: '2022 – Present',
    title: 'S1 Teknik Informatika',
    org: "Universitas Islam As-Syafi'iyah",
    kind: 'education',
    points: ['Bachelor degree program in Informatics Engineering.'],
  },
  {
    id: 'akses',
    period: '2023 – 2024',
    title: 'Senior Fullstack Developer',
    org: 'PT Akses Mandiri Jaya',
    kind: 'work',
    points: ['Coding.', 'Problem solver.', 'Person in charge.', 'Performed maintenance.'],
  },
  {
    id: 'ndh',
    period: '2024 – 2025',
    title: 'Supervisor and Project Management',
    org: 'PT Nusa Data Hexamatika',
    kind: 'work',
    points: [
      'Project lead.',
      'Coding.',
      'Supervisor programmer.',
      'Problem solver.',
      'Person in charge.',
      'Created project documentation.',
    ],
  },
  {
    id: 'bis',
    period: '2025 – 2026',
    title: 'Senior Backend Developer',
    org: 'PT Bisnis Ini Sinergi',
    kind: 'work',
    points: [
      'Coding.',
      'Problem solver.',
      'Person in charge.',
      'Created project documentation.',
    ],
  },
]

export type Project = {
  id: string
  name: string
  client: string
  stack: string[]
  category: 'Web' | 'Mobile' | 'API'
}

// Featured projects (4). Stacks transcribed exactly from the CV.
export const featuredProjects: Project[] = [
  {
    id: 'recruitment',
    name: 'Recruitment Management System',
    client: 'PT Grha Mitra Empatenam',
    stack: ['Node.js', 'Vue.js', 'Tailwind'],
    category: 'Web',
  },
  {
    id: 'damri-dashboard',
    name: 'Dashboard Transportation',
    client: 'DAMRI',
    stack: ['Node.js', 'Next.js'],
    category: 'Web',
  },
  {
    id: 'bagong-ticketing',
    name: 'Core Ticketing',
    client: 'Bagong Bus',
    stack: ['Node.js', 'Next.js'],
    category: 'Web',
  },
  {
    id: 'idmall',
    name: 'IDMALL',
    client: 'PT Trans Indonesia Superkoridor',
    stack: ['Flutter'],
    category: 'Mobile',
  },
]

// All remaining projects from the CV portfolio.
export const otherProjects: Project[] = [
  {
    id: 'recruitment-api',
    name: 'API Recruitment Management System',
    client: 'PT Grha Mitra Empatenam',
    stack: ['PHP', 'CodeIgniter 4', 'MySQL'],
    category: 'API',
  },
  {
    id: 'damri-api',
    name: 'API Dashboard Transportation',
    client: 'DAMRI',
    stack: ['Node.js', 'Express.js', 'MySQL'],
    category: 'API',
  },
  {
    id: 'bagong-api',
    name: 'API Micro Service Core Ticketing',
    client: 'Bagong Bus',
    stack: ['Node.js', 'Express.js', 'Golang', 'PostgreSQL'],
    category: 'API',
  },
  {
    id: 'absen-dulu-api',
    name: 'API Absen Dulu',
    client: 'Akses Mandiri Jaya',
    stack: ['Node.js', 'Express.js', 'Golang', 'PostgreSQL'],
    category: 'API',
  },
  {
    id: 'trans-oss-dashboard',
    name: 'Dashboard Operation Support System',
    client: 'PT Trans Indonesia Superkoridor',
    stack: ['HTML', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'idmall-api',
    name: 'API IDMALL',
    client: 'PT Trans Indonesia Superkoridor',
    stack: ['Node.js', 'Express.js', 'MySQL'],
    category: 'API',
  },
  {
    id: 'collection-bank-sampoerna',
    name: 'Collection System',
    client: 'Bank Sampoerna',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'collection-koperasi-sampoerna',
    name: 'Collection System',
    client: 'Koperasi Sampoerna',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'assessment-btn',
    name: 'Assessment Online',
    client: 'Bank Tabungan Negara',
    stack: ['.NET', 'SQL Server', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'freshklin',
    name: 'Freshklin',
    client: 'Freshklin',
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'brightnet',
    name: 'BrightNet',
    client: 'PLN Batam',
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'isatnet',
    name: 'IsatNet',
    client: 'IsatNet',
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'tenant-apl',
    name: 'Tenant Management System',
    client: 'APL',
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'mobile-collection-bank-sampoerna',
    name: 'Mobile Collection System',
    client: 'Bank Sampoerna',
    stack: ['Java', 'REST API', 'MySQL'],
    category: 'Mobile',
  },
  {
    id: 'mobile-collection-koperasi-sampoerna',
    name: 'Mobile Collection System',
    client: 'Koperasi Sampoerna',
    stack: ['Java', 'Python', 'REST API', 'MySQL'],
    category: 'Mobile',
  },
  {
    id: 'mobile-stock-opnam-bank-sampoerna',
    name: 'Mobile Stock Opnam',
    client: 'Bank Sampoerna',
    stack: ['Java', 'CodeIgniter', 'REST API', 'PostgreSQL'],
    category: 'Mobile',
  },
  {
    id: 'mobile-stock-opnam-bank-sampoerna-py',
    name: 'Mobile Stock Opnam',
    client: 'Bank Sampoerna',
    stack: ['Java', 'Python', 'REST API', 'PostgreSQL'],
    category: 'Mobile',
  },
  {
    id: 'mobile-tenant-apl',
    name: 'Mobile Tenant Management',
    client: 'APL',
    stack: ['Java', 'CodeIgniter', 'REST API', 'MySQL'],
    category: 'Mobile',
  },
  {
    id: 'mobile-freshklin',
    name: 'Mobile Freshklin',
    client: 'Freshklin',
    stack: ['Java', 'CodeIgniter', 'REST API', 'MySQL'],
    category: 'Mobile',
  },
  {
    id: 'mobile-isatnet',
    name: 'Mobile Isatnet',
    client: 'IsatNet',
    stack: ['Java', 'CodeIgniter', 'REST API', 'MySQL'],
    category: 'Mobile',
  },
  {
    id: 'mobile-brightnet',
    name: 'Mobile BrightNet',
    client: 'PLN Batam',
    stack: ['Java', 'CodeIgniter', 'REST API', 'MySQL'],
    category: 'Mobile',
  },
  {
    id: 'mobile-koperasi-anagata',
    name: 'Mobile Koperasi',
    client: 'Anagata',
    stack: ['React Native', '.NET Core API', 'SQL Server'],
    category: 'Mobile',
  },
  {
    id: 'mobile-e-properti',
    name: 'Mobile e-Properti',
    client: 'Ken Zie Propertindo',
    stack: ['Kotlin', 'Firebase'],
    category: 'Mobile',
  },
  {
    id: 'company-profile-cms',
    name: 'Company Profile and Content Management System',
    client: '',
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'inventory-pos-dtprint',
    name: 'Inventory and Point of Sale',
    client: 'dtPrint',
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'company-profile-static',
    name: 'Company Profile Static',
    client: '',
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
  },
  {
    id: 'member-management-zavera',
    name: 'Member Management System',
    client: 'Zavera Skin',
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'attendance-system',
    name: 'Attendance System',
    client: '',
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'inventory-pos-koperasi-sahara',
    name: 'Inventory and Point Of Sale',
    client: 'Koperasi Sahara',
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'remittance-fusindo-soka',
    name: 'Remittance System',
    client: 'Fusindo Soka',
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    category: 'Web',
  },
  {
    id: 'mobile-pos-koperasi-sahara',
    name: 'Mobile Point Of Sale',
    client: 'Koperasi Sahara',
    stack: ['Java', 'CodeIgniter', 'REST API', 'MySQL'],
    category: 'Mobile',
  },
  {
    id: 'mobile-remittance-fusindo-soka',
    name: 'Mobile Remittance and Domestic Transfer',
    client: 'Fusindo Soka',
    stack: ['Java', 'CodeIgniter', 'REST API', 'MySQL'],
    category: 'Mobile',
  },
  {
    id: 'mobile-outpatient',
    name: 'Mobile Outpatient Data Collection',
    client: '',
    stack: ['Java', 'Firebase'],
    category: 'Mobile',
  },
  {
    id: 'mobile-internet-subscription-tis',
    name: 'Mobile Internet Subscription Application',
    client: 'Trans Indonesia Superkoridor',
    stack: ['Flutter', 'Firebase', 'Node.js', 'MySQL'],
    category: 'Mobile',
  },
  {
    id: 'mobile-internet-sales-tis',
    name: 'Mobile Internet Subscription Sales Application',
    client: 'Trans Indonesia Superkoridor',
    stack: ['Flutter', 'Firebase', 'Node.js', 'MySQL'],
    category: 'Mobile',
  },
  {
    id: 'persib-membership',
    name: 'Football Club Membership Application',
    client: 'Persib',
    stack: ['Ionic', 'REST API', 'MySQL'],
    category: 'Mobile',
  },
  {
    id: 'squad-omeo',
    name: 'SQUAD (Sports Application and Selling Sports Equipment)',
    client: 'OMEO',
    stack: ['Ionic', 'REST API', 'MySQL'],
    category: 'Mobile',
  },
  {
    id: 'persib-dashboard',
    name: 'Football Club Membership Dashboard',
    client: 'Persib',
    stack: ['PHP', 'CodeIgniter', 'Vue.js', 'MySQL'],
    category: 'Web',
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#contact', label: 'Contact' },
]

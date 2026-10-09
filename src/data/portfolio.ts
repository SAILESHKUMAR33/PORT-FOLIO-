/**
 * Central portfolio data — generated from Sailesh Kumar A's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sailesh Kumar A',
  displayName: 'Sailesh Kumar',
  firstName: 'SAILESH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SAILESH ORIGINAL',
  role: 'AI Engineer',
  tagline: ['AI Engineer', 'Machine Learning', 'Python'],
  intro:
    'B.Tech graduate in Artificial Intelligence and Data Science with hands-on experience in ML, Deep Learning, Computer Vision, and applied Generative AI / LLM systems — currently an AI Intern at Codework.ai.',
  location: 'Chennai, India',
  email: 'sailesh4246V@gmail.com',
  phone: '+91 9629320388',
  links: {
    linkedin: 'https://linkedin.com/in/sailesh-kumar-a571862b2',
    github: 'https://github.com/SAILESHKUMAR33',
  },
  resumePdf: '/assets/Sailesh_Kumar_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Sailesh Kumar A',
  },
  interests: ['Machine Learning', 'Computer Vision', 'Generative AI / LLMs'],
};

export const education = [
  {
    school: 'Saveetha Engineering College',
    place: 'Chennai',
    degree: 'Bachelor of Technology — Artificial Intelligence and Data Science',
    period: '2022 – 2026',
    score: 'CGPA 7.0',
  },
  {
    school: 'CEOA Matric and Higher Secondary School',
    place: 'Chennai',
    degree: 'HSC',
    period: '2020 – 2022',
    score: '72%',
  },
  {
    school: 'S.T. Britto Matric School',
    place: 'Chennai',
    degree: 'SSLC',
    period: 'Before 2020',
    score: '79.8%',
  },
];

export const experience = [
  {
    company: 'Codework.ai',
    role: 'AI Intern',
    place: 'Chennai, India',
    period: '3 Months (Current) · On-site',
    points: [
      'Building and integrating AI/ML-driven features into product workflows, working closely with engineers on model integration and testing.',
      'Writing Python code to prepare data, prototype ML components, and evaluate model outputs against product requirements.',
      'Collaborating with senior engineers on model debugging, code reviews, and iterative experimentation in an agile environment.',
      'Applied real-time computer vision skills to independently design and build a YOLOv8-based fight/threat-detection prototype with DeepSORT tracking and a deployed Streamlit monitoring dashboard.',
    ],
  },
  {
    company: "Young's Mind Technology Solutions Pvt Ltd",
    role: 'Data Science Intern',
    place: 'Chennai, India',
    period: '1 Month · On-site',
    points: [
      'Developed and evaluated machine learning models in Python for predictive analytics and data-driven decision-making.',
      'Performed data cleaning, preprocessing, and feature engineering to improve model performance.',
      'Built interactive dashboards and visualizations (Power BI, Matplotlib) to communicate model results and key findings.',
      'Automated repetitive data workflows by developing reusable Python scripts, improving processing efficiency.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'fight-detection',
    title: 'Fight-Detection System',
    year: '2024',
    genre: 'Computer Vision • YOLOv8 • Real-Time AI',
    logline: 'Real-time video-surveillance pipeline combining YOLOv8 violence detection, DeepSORT tracking, and a live Streamlit dashboard.',
    stack: ['Python', 'YOLOv8', 'DeepSORT', 'Streamlit', 'SQLite'],
    build: [
      'Built a real-time video-surveillance pipeline combining a pretrained YOLOv8 violence-detection model with a DeepSORT person tracker and rule-based loitering logic (duration + drift), deployed via a modular architecture (camera, detection, tracking, behavior, alerts, dashboard).',
      'Solved the cold-start problem by evaluating a pretrained YOLOv8 detector against a custom GRU classifier trained on MediaPipe pose keypoints, shipping a working detector before custom training data was ready.',
    ],
    features: [
      'Real-time YOLOv8 violence detection',
      'DeepSORT person tracking + loitering logic',
      'Model benchmarking with ROC/AUC curves',
      'Streamlit dashboard with live-alerts view',
      'SQLite database for persisting threat alerts',
      'Modular swappable architecture',
    ],
    metrics: [
      { value: 'Real-time', label: 'video surveillance' },
      { value: 'YOLOv8', label: 'detection model' },
      { value: 'DeepSORT', label: 'person tracker' },
      { value: 'Streamlit', label: 'deployed dashboard' },
    ],
    github: 'https://github.com/SAILESHKUMAR33/Fight-detection',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'smart-travel-planner',
    title: 'Smart Travel Itinerary Planner',
    year: '2024',
    genre: 'LLM • RAG • Gemini API',
    logline: 'Streamlit app that turns a city, a budget, and interests into a day-by-day travel itinerary using RAG on top of Google Gemini.',
    stack: ['Python', 'Gemini API', 'RAG', 'Streamlit', 'Embeddings'],
    build: [
      'Built a Streamlit app that turns a city, a budget, and a list of interests into a day-by-day, 3-day travel itinerary using a retrieval-augmented generation pipeline on top of Google Gemini API.',
      'Applied geospatial logic — haversine distance for clustering nearby POIs and a nearest-neighbor route builder — to keep each day\'s stops within one area and visited in a sensible order, filtered against a per-day budget.',
    ],
    features: [
      'RAG pipeline on Gemini API',
      'Schema-constrained JSON POI generation',
      'Cosine similarity for diverse category retrieval',
      'Haversine distance + nearest-neighbor routing',
      'Local specialties & pipeline walkthrough pages',
      'Deployed on Streamlit Community Cloud',
    ],
    metrics: [
      { value: '3-day', label: 'itinerary generation' },
      { value: 'RAG', label: 'retrieval pipeline' },
      { value: 'Gemini', label: 'LLM backbone' },
      { value: 'Budget-aware', label: 'POI filtering' },
    ],
    github: 'https://github.com/SAILESHKUMAR33/Smart-Travel-Itinerary-Planner',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'vending-machine-analytics',
    title: 'Vending Machine Sales Analytics',
    year: '2024',
    genre: 'ML • Streamlit • Forecasting',
    logline: 'Multi-page Streamlit analytics app with a RandomForest demand forecast, dynamic pricing, and a rule-based Q&A assistant.',
    stack: ['Python', 'scikit-learn', 'Streamlit', 'RandomForest', 'Pandas'],
    build: [
      'Built a multi-page Streamlit analytics app turning raw vending-machine sales exports into category/product summaries, a demand forecast, a refill plan, and dynamic pricing recommendations.',
      'Trained a RandomForest regression model on weekly lag features (lag-1, lag-2, 4-week rolling average) to predict next-week per-product demand, validated against a naive baseline using MAE on a holdout set.',
    ],
    features: [
      'Auto-detects two real vendor export formats',
      'RandomForest demand forecasting',
      'Rule-based Q&A assistant (no LLM needed)',
      'Dynamic pricing recommendations',
      'st.cache_data / st.cache_resource optimization',
      'Deployed on Streamlit Community Cloud',
    ],
    metrics: [
      { value: 'RandomForest', label: 'regression model' },
      { value: 'MAE-validated', label: 'vs naive baseline' },
      { value: 'Multi-page', label: 'Streamlit app' },
      { value: 'No GPU', label: 'rule-based Q&A' },
    ],
    github: 'https://github.com/SAILESHKUMAR33/vending-machine-project',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'autism-detection',
    title: 'Autism Detection (EEG + VGG)',
    year: '2024',
    genre: 'Deep Learning • CNN • Medical AI',
    logline: 'Deep learning pipeline using VGG16 and VGG19 to classify EEG electrode data for early autism detection.',
    stack: ['Python', 'VGG16', 'VGG19', 'Deep Learning', 'TensorFlow'],
    build: [
      'Built a deep learning pipeline using VGG16 and VGG19 architectures to classify EEG electrode data for early autism detection.',
      'Performed data preprocessing, model training, and evaluation; benchmarked both architectures on accuracy, precision, recall, and F1-score, then tuned hyperparameters to optimize for reliable real-world classification.',
    ],
    features: [
      'VGG16 & VGG19 architecture benchmarking',
      'EEG electrode data preprocessing',
      'Accuracy, Precision, Recall, F1-score evaluation',
      'Hyperparameter tuning for medical classification',
    ],
    metrics: [
      { value: 'VGG16/19', label: 'CNN architectures' },
      { value: 'EEG data', label: 'input modality' },
      { value: 'F1-score', label: 'primary metric' },
      { value: 'Early', label: 'autism detection' },
    ],
    github: 'https://github.com/SAILESHKUMAR33/projectphase2',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'codework-intern',
    title: 'AI Intern',
    org: 'Codework.ai',
    detail: 'Building and integrating AI/ML-driven features into product workflows in a live production environment.',
    laurel: 'Current Role',
  },
  {
    id: 'ymt-intern',
    title: 'Data Science Intern',
    org: "Young's Mind Technology Solutions",
    detail: 'Developed ML models, performed EDA, built Power BI dashboards and automated data workflows in Python.',
    laurel: 'Industry Experience',
  },
  {
    id: 'fight-detection-deploy',
    title: 'Deployed Real-Time AI System',
    org: 'Fight-Detection Project',
    detail: 'Independently designed, built, and deployed a YOLOv8 + DeepSORT real-time threat detection system with a live Streamlit dashboard.',
    laurel: 'Production Deployment',
  },
  {
    id: 'llm-rag',
    title: 'LLM & RAG Systems',
    org: 'Gemini API · Smart Travel Planner',
    detail: 'Built end-to-end RAG pipeline with Gemini embeddings, cosine similarity retrieval, geospatial routing, and Streamlit Cloud deployment.',
    laurel: 'Generative AI',
  },
  {
    id: 'ml-breadth',
    title: 'Full ML Lifecycle',
    org: 'CNNs · YOLOv8 · RandomForest · MLPs',
    detail: 'Trained and evaluated CNNs (VGG16/VGG19), YOLOv8 detectors, RandomForest regressors, and MLPs across classification, detection, and forecasting tasks.',
    laurel: 'ML Breadth',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Infosys', name: 'AI with Python', link: '#' },
  { issuer: 'IBM / Great Learning', name: 'Python for Data Science', link: '#' },
  { issuer: 'Coursera', name: 'Deep Learning & GPU Programming', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python is the primary language',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C', mono: 'C' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'ml-dl',
    title: 'ML / Deep Learning',
    subtitle: 'Models & training pipelines',
    skills: [
      { name: 'Machine Learning', mono: 'ML' },
      { name: 'Deep Learning', mono: 'DL' },
      { name: 'CNN / VGG16/19', mono: 'CN' },
      { name: 'YOLOv8', mono: 'Yo' },
      { name: 'RandomForest', mono: 'Rf' },
      { name: 'MLP', mono: 'Mp' },
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'Time-Series Forecasting', mono: 'Ts' },
    ],
  },
  {
    id: 'ai-nlp-genai',
    title: 'AI / NLP / GenAI',
    subtitle: 'Language & generative systems',
    skills: [
      { name: 'NLP', mono: 'NP' },
      { name: 'Computer Vision', mono: 'CV' },
      { name: 'OpenCV', mono: 'Oc' },
      { name: 'DeepSORT', mono: 'Ds' },
      { name: 'LLMs', mono: 'Lm' },
      { name: 'Gemini API', mono: 'Gm' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'Embeddings', mono: 'Em' },
      { name: 'RAG', mono: 'Rg' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Dev, deploy & visualize',
    skills: [
      { name: 'Streamlit', mono: 'St' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Power BI', mono: 'Pb' },
      { name: 'React Native', mono: 'Rn' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Expo', mono: 'Ex' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Da' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'Data Preprocessing', mono: 'Dp' },
      { name: 'Feature Engineering', mono: 'Fe' },
      { name: 'Model Evaluation', mono: 'Me' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Next chapters in the series',
    skills: [
      { name: 'Machine Learning', mono: 'ML' },
      { name: 'Computer Vision', mono: 'CV' },
      { name: 'Generative AI / LLMs', mono: 'Gn' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Fight-Detection', 'Smart Travel Planner', 'Vending Machine Analytics', 'Autism Detection', 'IBM Python for Data Science'],
  Java: ['B.Tech AI & DS'],
  SQL: ["Data Science Intern – Young's Mind"],
  'Machine Learning': ["Data Science Intern – Young's Mind", 'Vending Machine Analytics', 'Coursera Deep Learning'],
  'Deep Learning': ['Autism Detection – VGG16/VGG19', 'Coursera Deep Learning & GPU Programming'],
  'CNN / VGG16/19': ['Autism Detection – VGG16/VGG19'],
  YOLOv8: ['Fight-Detection – Real-Time Threat Detection'],
  RandomForest: ['Vending Machine Analytics'],
  'scikit-learn': ['Vending Machine Analytics'],
  NLP: ['Semantic Analysis Engine'],
  'Computer Vision': ['Fight-Detection', 'Comment Classification System'],
  OpenCV: ['Comment Classification System'],
  DeepSORT: ['Fight-Detection'],
  LLMs: ['Smart Travel Itinerary Planner'],
  'Gemini API': ['Smart Travel Itinerary Planner'],
  'Prompt Engineering': ['Smart Travel Itinerary Planner'],
  RAG: ['Smart Travel Itinerary Planner'],
  Streamlit: ['Fight-Detection Dashboard', 'Vending Machine Analytics', 'Smart Travel Planner'],
  'Git / GitHub': ['Codework.ai Intern', "Young's Mind Intern"],
  'Power BI': ["Data Science Intern – Young's Mind"],
  DSA: ['B.Tech AI & DS'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: 'Before 2022',
    synopsis: 'School years in Chennai — building the groundwork with SSLC at S.T. Britto Matric School (79.8%) and HSC at CEOA (72%).',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Beginning',
        description: 'SSLC at S.T. Britto Matric School, Chennai — finishing with 79.8%.',
        tags: ['SSLC', 'Mathematics', 'Science'],
        runtime: 'Before 2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Jump to Higher Secondary',
        description: 'HSC at CEOA Matric and Higher Secondary School, Chennai — completing with 72%.',
        tags: ['HSC', 'CEOA'],
        runtime: '2020 – 2022',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & Data Science',
    period: '2022 – 2026',
    synopsis: 'B.Tech in Artificial Intelligence and Data Science at Saveetha Engineering College, Chennai.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Artificial Intelligence and Data Science at Saveetha Engineering College — CGPA 7.0.',
        tags: ['B.Tech', 'AI & DS', 'CGPA 7.0'],
        runtime: '2022 – 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Model Builder',
        description: 'Trained CNNs (VGG16/VGG19), MLPs, YOLOv8 detectors, and RandomForest models across classification, detection, and forecasting tasks.',
        tags: ['CNN', 'YOLOv8', 'RandomForest', 'MLP'],
        runtime: 'Academic Projects',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The LLM Explorer',
        description: 'Built LLM-based systems with Gemini API — prompt engineering, structured JSON generation, embeddings, and RAG for semantic search.',
        tags: ['LLMs', 'Gemini API', 'RAG', 'Embeddings'],
        runtime: 'Smart Travel Planner',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Industry Exposure',
    period: '2024',
    synopsis: 'First industry experience as a Data Science Intern at Young\'s Mind Technology Solutions — ML models, EDA, Power BI dashboards.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Data Scientist',
        description: "Data Science Intern at Young's Mind Technology Solutions — ML models, data cleaning, EDA, and Power BI dashboards.",
        tags: ['Data Science', 'Python', 'Power BI', 'EDA'],
        runtime: '1 Month · On-site',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'The Analyst',
        description: 'Built interactive dashboards and visualizations to communicate model results; automated repetitive data workflows with Python scripts.',
        tags: ['Matplotlib', 'Power BI', 'Python Scripts'],
        runtime: "Young's Mind",
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2024 – Present',
    synopsis: 'Four Originals shipped — real-time threat detection, a RAG travel planner, vending machine forecasting, and medical AI — plus a current AI Internship.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Threat Detector',
        description: 'Fight-Detection — YOLOv8 + DeepSORT real-time surveillance pipeline with loitering logic, model benchmarking, and a deployed Streamlit dashboard.',
        tags: ['YOLOv8', 'DeepSORT', 'Streamlit', 'SQLite'],
        runtime: '2024',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The RAG Builder',
        description: 'Smart Travel Itinerary Planner — RAG on Gemini API with cosine similarity retrieval, haversine routing, and Streamlit Cloud deployment.',
        tags: ['Gemini API', 'RAG', 'Python', 'Streamlit'],
        runtime: '2024',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'The Forecaster',
        description: 'Vending Machine Analytics — RandomForest demand forecasting, dynamic pricing, rule-based Q&A assistant, deployed on Streamlit Cloud.',
        tags: ['scikit-learn', 'RandomForest', 'Streamlit'],
        runtime: '2024',
        palette: violet,
      },
      {
        code: 'S04 E04',
        title: 'The AI Intern',
        description: 'AI Intern at Codework.ai — integrating ML features into product workflows, model debugging, code reviews, and agile experimentation.',
        tags: ['AI/ML', 'Codework.ai', 'Python', 'Git'],
        runtime: '3 Months · Current',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Moving into a full-time AI/ML Engineer role — deepening expertise in Computer Vision, LLMs, and production ML systems.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Looking to move into a full-time AI/ML Engineer role, applying skills in Computer Vision, Generative AI, and end-to-end ML pipelines.',
        tags: ['AI/ML Engineer', 'Computer Vision', 'GenAI'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Python', detail: 'Full ML lifecycle — data to deployment', palette: amber },
  { label: 'Computer Vision', title: 'YOLOv8 + DeepSORT', detail: 'Real-time fight detection system', palette: crimson },
  { label: 'Generative AI', title: 'RAG on Gemini API', detail: 'Smart Travel Itinerary Planner', palette: ocean },
  { label: 'Current role', title: 'AI Intern', detail: 'Codework.ai · 3 months · On-site', palette: violet },
  { label: 'Deep learning', title: 'VGG16 / VGG19', detail: 'EEG-based autism detection', palette: jade },
  { label: 'Forecasting', title: 'RandomForest', detail: 'Vending Machine demand forecast + MAE validation', palette: amber },
  { label: 'Deployment', title: 'Streamlit Cloud', detail: '3 apps deployed • Fight-Detection • Travel • Vending', palette: crimson },
  { label: 'Certified', title: '3 Certifications', detail: 'Infosys · IBM / Great Learning · Coursera', palette: ocean },
  { label: 'Industry XP', title: '2 Internships', detail: 'Codework.ai (AI) + Young\'s Mind (Data Science)', palette: jade },
  { label: 'Next mission', title: 'Full-time AI/ML', detail: 'Computer Vision · LLMs · Production ML', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · AI & DS',
    lines: ['Saveetha Engineering College, Chennai', '2022 – 2026'],
    chips: ['CGPA 7.0'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['ML · Deep Learning · CNN · YOLOv8 · RandomForest', 'NLP · LLMs · Gemini API · RAG · Computer Vision'],
    chips: ['Python', 'YOLOv8', 'Gemini API', 'RAG', 'Streamlit', 'scikit-learn'],
  },
  {
    kicker: 'Experience',
    title: 'Two Internships',
    lines: ['AI Intern · Codework.ai · 3 Months (Current)', "Data Science Intern · Young's Mind Technology Solutions · 1 Month"],
  },
  {
    kicker: 'Projects',
    title: 'Four Originals',
    lines: ['Fight-Detection — YOLOv8 + DeepSORT real-time surveillance', 'Smart Travel Planner — RAG on Gemini API', 'Vending Machine Analytics — RandomForest forecasting + Q&A'],
  },
  {
    kicker: 'Deep Learning',
    title: 'CNN & Beyond',
    lines: ['VGG16/VGG19 for EEG-based Autism Detection', 'YOLOv8 object detection · GRU on MediaPipe keypoints', 'MLP digit classifier · OpenCV comment classifier'],
  },
  {
    kicker: 'Certified',
    title: '3 Certifications',
    lines: ['AI with Python — Infosys', 'Python for Data Science — IBM / Great Learning', 'Deep Learning & GPU Programming — Coursera'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Machine Learning · Computer Vision · Generative AI / LLMs'],
  },
];

export type ProfileId = 'sailesh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sailesh',
    name: 'Sailesh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2024`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

// Edit this file to add or update projects. Never add results that aren't verified.

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: "Completed" | "In Progress";
  summary: string;
  overview: string;
  problem: string;
  tech: string[];
  features: string[];
  dataset?: string;
  repo?: string;
  screenshots: string[]; // real screenshot URLs; empty shows placeholders
  results?: string[]; // verified results only (from the resume)
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "retail-banking-risk-fraud-analytics",
    title: "Retail Banking Risk & Fraud Analytics Platform",
    category: "Machine Learning · Risk",
    status: "Completed",
    summary: "End-to-end fraud detection pipeline on 590,540 card transactions (IEEE-CIS) with Python and Scikit-learn.",
    overview:
      "An end-to-end machine learning project analysing financial transactions to identify potentially fraudulent activity, using the IEEE-CIS Fraud Detection dataset — 590,540 transaction records, 429 features and the target variable isFraud.",
    problem:
      "Card fraud is costly for banks and hard to spot within huge volumes of legitimate transactions. The goal is to find the signals that separate fraudulent from genuine transactions while balancing fraud capture against false alerts.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook"],
    dataset: "IEEE-CIS Fraud Detection — 590,540 records, 429 features",
    features: [
      "Data understanding and preprocessing",
      "Memory optimisation and merging of transaction and identity tables",
      "Exploratory data analysis of fraud indicators",
      "Feature engineering",
      "Logistic Regression and Random Forest models",
      "Model evaluation, confusion matrix and feature importance analysis",
    ],
    results: [
      "Identified high-risk fraud indicators across transaction amount, card network, email domain and device signals.",
      "Compared models on Precision, Recall, F1-score and ROC-AUC; Random Forest achieved the strongest fraud recall.",
      "Feature importance and confusion matrix results documented on GitHub.",
    ],
    repo: "https://github.com/aaris011/Retail-Banking-Risk-Fraud-Analytics",
    screenshots: [],
    featured: true,
  },
  {
    slug: "netflix-sql-data-analysis",
    title: "Netflix Content Intelligence — SQL Data Analysis",
    category: "SQL · Data Modelling",
    status: "Completed",
    summary: "8,800+ Netflix titles analysed in MySQL with 20 SQL queries on country, genre and rating.",
    overview:
      "SQL-based analysis of Netflix's content catalogue in MySQL, exploring content distribution, countries, genres, ratings and other business questions.",
    problem:
      "Streaming platforms need to understand their catalogue mix to guide content strategy. This project answers practical business questions directly with SQL.",
    tech: ["MySQL", "SQL"],
    dataset: "Netflix titles catalogue — 8,800+ titles",
    features: [
      "20 SQL queries answering business questions",
      "Aggregations, GROUP BY and window functions",
      "Date functions for release trends",
      "Content analysis by country, genre and rating",
    ],
    results: [
      "The top 3 content-producing countries account for about 55% of the catalogue.",
      "All queries and findings documented on GitHub.",
    ],
    repo: "https://github.com/aaris011/Netflix-SQL-Data-Analysis",
    screenshots: [],
    featured: true,
  },
  {
    slug: "hospital-er-analytics-dashboard",
    title: "Hospital Emergency Room Analytics Dashboard",
    category: "Excel · KPI Dashboard",
    status: "Completed",
    summary: "Interactive Excel dashboard with 7 KPI cards for ER patient volume, wait times, satisfaction and referrals.",
    overview:
      "An Excel-based hospital operations dashboard that analyses emergency room performance — patient volume, waiting times, satisfaction, admission status and referrals.",
    problem:
      "ER managers need a quick view of patient volume, wait times and satisfaction to allocate staff and improve care. Raw records make this hard to see at a glance.",
    tech: ["Microsoft Excel", "PivotTables", "Pivot Charts", "Slicers", "Conditional Formatting"],
    features: [
      "7 KPI cards for core emergency room metrics",
      "PivotTables and Pivot Charts for trends and breakdowns",
      "Slicers for multi-dimensional filtering",
      "Conditional formatting to flag wait-time and satisfaction thresholds",
    ],
    results: ["3 specialty departments accounted for the majority of patient volume — an insight relevant to resource allocation."],
    repo: "https://github.com/aaris011/Hospital-Emergency-Room-Analytics-Dashboard",
    screenshots: [],
    featured: true,
  },
  {
    slug: "student-performance-analytics-system",
    title: "Academic Performance Analytics — EduPulse",
    category: "Full-stack · Analytics",
    status: "Completed",
    summary: "Full-stack web app for tracking, analysing and visualising student academic performance.",
    overview:
      "EduPulse is a full-stack web application with a Python Flask API and a JavaScript front end for tracking, analysing and visualising student performance — grades, trends, ranks, weak subjects and PDF report cards.",
    problem:
      "Educators benefit from spotting students who need support early. This system turns raw marks and attendance into clear performance indicators.",
    tech: ["Python", "Flask", "SQLAlchemy", "SQLite", "JavaScript", "HTML/CSS", "ReportLab", "Pandas", "SQL", "Excel"],
    features: [
      "Add, edit and delete students with dynamic subject marks",
      "Auto-calculated totals, percentage and grades",
      "Weak-subject detection and performance trends",
      "Class-average comparison and rank leaderboard",
      "Dashboard with KPI cards and charts",
      "PDF report card export",
    ],
    results: [
      "Python ETL pipeline improved data quality across 300+ student records (~90% null-value reduction).",
      "Identified a 15–20% score gap between high- and low-attendance students through EDA.",
      "Excel dashboard tracking 5 KPIs: pass rate, average marks, attendance, subject performance and grade distribution.",
    ],
    repo: "https://github.com/aaris011/aaris011-student-performance-analytics-system",
    screenshots: [],
  },
  {
    slug: "ecommerce-demand-forecasting",
    title: "E-Commerce Demand Forecasting & Model Monitoring Platform",
    category: "Forecasting · MLOps",
    status: "In Progress",
    summary: "Demand forecasting with ongoing model monitoring for e-commerce. Currently in development.",
    overview:
      "A platform in development for forecasting e-commerce product demand and monitoring model performance over time. Details will be added as the project progresses.",
    problem:
      "Accurate demand forecasts help e-commerce teams plan inventory. Models also drift over time, so monitoring is needed to keep forecasts reliable.",
    tech: ["Python", "Time Series", "Machine Learning", "Model Monitoring"],
    features: ["Planned: demand forecasting models", "Planned: model monitoring", "More details coming soon"],
    screenshots: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

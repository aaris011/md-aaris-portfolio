import { Database, LineChart, BarChart3, BrainCircuit, Wrench, type LucideIcon } from "lucide-react";

export type SkillGroup = { title: string; icon: LucideIcon; blurb: string; items: string[] };

// Only verified skills — taken from the resume.
export const skillGroups: SkillGroup[] = [
  { title: "SQL & Databases", icon: Database, blurb: "Querying and modelling data to answer business questions.", items: ["SQL", "MySQL", "Joins", "GROUP BY & HAVING", "Window Functions", "CTEs", "Date Functions", "Data Modelling", "KPI Analysis"] },
  { title: "Python & Analytics", icon: LineChart, blurb: "Cleaning, transforming and exploring data.", items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Exploratory Data Analysis", "Data Cleaning", "Data Preprocessing", "ETL", "Feature Engineering", "Statistical Analysis"] },
  { title: "Business Intelligence", icon: BarChart3, blurb: "Communicating insight to stakeholders.", items: ["Microsoft Excel", "PivotTables", "Slicers", "Conditional Formatting", "KPI Reporting", "Dashboard Development", "Data Visualization"] },
  { title: "Machine Learning & Risk", icon: BrainCircuit, blurb: "Building and validating predictive models.", items: ["Scikit-learn", "Logistic Regression", "Random Forest", "Classification", "Fraud Detection", "Model Evaluation", "Precision, Recall, F1 & ROC-AUC", "Confusion Matrix Analysis"] },
  { title: "Tools", icon: Wrench, blurb: "Workflow and versioning.", items: ["Jupyter Notebook", "Git", "GitHub", "Joblib"] },
];

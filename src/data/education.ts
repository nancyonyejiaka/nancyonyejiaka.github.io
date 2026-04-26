export interface DegreeData {
  degree: string;
  date: string;
  honors: string;
  extras?: string;
}

export interface EducationData {
  school: string;
  location: string;
  degrees: DegreeData[];
}

export const education: EducationData = {
  school: "Northeastern University",
  location: "Boston, MA",
  degrees: [
    {
      degree: "Master of Science in Computer Science",
      date: "May 2025",
      honors: "magna cum laude",
    },
    {
      degree: "Bachelor of Science in Computer Science and Behavioral Neuroscience, Minor in Biology",
      date: "May 2024",
      honors: "cum laude",
      extras: "Honors Program \u00b7 Dean\u2019s List: Fall 2020 \u2013 Fall 2023",
    },
  ],
};

export interface AboutData {
  title: string;
  content: string;
}

export interface ProjectData {
  title: string;
  media: string;
  description: string;
  alt: string;
  expand: boolean;
  onToggle: () => void;
}

export interface SkillData{
    source:string;
    alt:string;
    title:string;
}
export interface SkillCategories {
    title:string;
    skills: SkillData[];
}
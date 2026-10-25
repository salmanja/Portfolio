export interface SkillData{
    source:string;
    alt:string;
    title:string;
}
export interface SkillCategories {
    title:string;
    skills: SkillData[];
}
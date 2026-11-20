import { Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import type { ProjectData } from "../Panel Types/panelTypes";
import ProjectCard from "./ProjectCard";

const projectsData: ProjectData[] = [
  {
    title: "Bluewater Imaging",
    alt: "Bluewater Imaging",
    media: "/projects/demos/bluewater-imaging-demo.mp4",
    description: "Bluewater Imaging is a diagnostic imaging website that helps patients and referring physicians explore imaging services, clinic locations, and available appointment options. The redesigned experience brings essential information together in a sleek, modern layout, making it easier for visitors to find what they need.\n\nThe website features a dedicated packages page outlining available package tiers, a booking system, and strategically placed calls to action that guide patients and physicians toward relevant information and next steps.",
    stack: ["PHP", "Javascript", "HTML", "CSS"],
    expand: false,
    onToggle: () => {},
  },
  {
    title: "AuraHealth",
    alt: "AuraHealth",
    media: "/projects/demos/aurahealth-demo.mp4",
    description: "AuraHealth is a healthcare and wellness website designed to make information and services easier to explore. The redesign transforms an outdated, cluttered experience into a cleaner, more modern website with a stronger visual identity, clearer content hierarchy, and more intuitive navigation.\n\nThe website brings together information about AuraHealth’s services, technology, patient resources, and booking options in a cohesive, responsive experience.",
    stack: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    expand: false,
    onToggle: () => {},
  },
  {
    title: "Verifywise",
    alt: "Verifywise",
    media: "/projects/images/verifywise-demo.jpg",
    description: "VerifyWise is an AI governance platform designed to help organizations manage AI projects, assess risks, and organize compliance documentation. Its dashboard brings together tools for managing projects, assessments, vendors, risks, and supporting documentation.\n\nMy work primarily focused on the dashboard’s file upload and management experience, contributing to the interface that allows users to upload, organize, and manage documentation within the platform.",
    stack: ["React", "Typescript", "Javascript", "Python", "PostgreSQL"],
    expand: false,
    onToggle: () => {},
  },
  {
    title: "Barn finds",
    alt: "Barn finds",
    media: "/projects/images/coming-soon.jpg",
    description: "BarnFinds is a horse discovery platform concept designed to give equestrians a more engaging way to browse horse listings. Each listing brings together horse photography and key details, including breed, age, height, discipline, temperament, and experience level.\n\nThe current prototype explores a swipe-style browsing experience, allowing users to move between horses, explore multiple photos, and view detailed profiles.",
    stack: ["React", "Typescript", "Node.js"],
    expand: false,
    onToggle: () => {},
  },
  {
    title: "NoteFolio",
    alt: "NoteFolio",
    media: "./projects/images/coming-soon.jpg",
    description: "NoteFolio is an ADHD-inspired note-taking application concept designed to make capturing and organizing thoughts more straightforward. It provides a simple space to create, view, edit, and delete notes, with the aim of keeping everyday information easy to access.\n\nBuilt with Angular and Firebase, the application uses cloud storage to manage notes and is packaged for desktop use with Electron. Voice-to-text is another feature being explored as the project continues to develop.",
    stack: ["Angular", "Typescript", "Node.js", "Express.js", "Electron", "Firebase"],
    expand: false,
    onToggle: () => {},
  },
];

export default function ProjectsPanel() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setExpandedProject((prevTitle) => {
      return prevTitle === title ? null : title;
    });
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        p: 4,
      }}
    >
      <Typography variant="h4" color="text.primary">
        My work
      </Typography>
      <Divider sx={{ width: "100%" }} />

      {projectsData.map((project) => (
        <Box
          key={project.alt}
          sx={{
            width: "100%",
            borderColor: "divider",
            borderRadius: 1,
          }}
        >
          <ProjectCard
            expand={expandedProject === project.title}
            onToggle={() => handleToggle(project.title)}
            title={project.title}
            alt={project.alt}
            media={project.media}
            stack={project.stack}
            description={project.description}
          />
        </Box>
      ))}
    </Box>
  );
}

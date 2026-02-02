import { Typography, Avatar, Stack } from "@mui/material";
import AboutImage from "./A9829537-0357-49A9-B05C-67E5027B86A8.jpeg";
import "./AboutPanel.css";

export default function AboutPanel() {
  //create a state for the about 3D mesh

  return (
    <Stack spacing={2} padding={4} className="items-center">
      <Typography variant="h3" className="bold">
        About Me
      </Typography>
      <Avatar
        alt="Jamila Salman"
        src={AboutImage}
        sx={{ width: 150, height: 150 }}
      />
      <Typography variant="body1">
        <span>Intro</span>
        Hi, I'm Jamilah Salman—a front-end developer with over five years of
        experience turning ideas into interactive, user-friendly digital
        products. I've had the chance to work across industries—from retail to
        healthcare to managed services—building everything from sleek startup
        apps to enterprise-level platforms in both the US and Canada. If you
        asked my peers to describe me, you'd probably hear: creative,
        outside-the-box thinker, problem-solver. I like to think of myself as
        the person people come to when they need a spark of innovation… or a
        tricky bug squashed.
        <span>Expertise & Achievements</span>
        In 2021, I joined Tekno Visual as a web developer and, after creating
        their website, I was promoted to Lead Web Developer to kickstart their
        web development services. That role lit a fire for leadership and
        innovation. Most recently, I worked at Verifywise, where I led the
        front-end development of an AI-powered file management system for global
        corporations. I designed the file manager interface, integrated backend
        systems, and introduced features like Uppy file uploads and in-app
        guided tours. Eventually, I transitioned into a full-stack developer,
        collaborating across front-end and back-end teams. Through these
        experiences, I dove deeper into the MERN, MEAN, and MEN stacks, and even
        explored machine learning and AI integration. These projects didn't just
        sharpen my skills—they fueled my passion to keep growing as a full-stack
        developer.
        <span>Passion & Values</span>
        I'm a lifelong learner. Whether it's testing a new JavaScript framework,
        experimenting with libraries, or solving everyday challenges with code,
        I'm always building and exploring. My personal projects often start with
        the question: “What problem can I solve today?” When I'm not coding,
        you'll probably find me riding or caring for horses. Equestrian life has
        been a teacher of its own: riding requires patience, precision, and the
        ability to stay calm when the unexpected happens. Those same qualities
        shape how I approach coding—plan carefully, adapt quickly, and stay
        grounded under pressure.
        <span>Approach to Work</span>
        My process blends my background in marketing and project management with
        my developer mindset. I always start by understanding the client—their
        goals, their passions, their vision. Once I know who they are, I can
        design and build something that not only works but feels like an
        extension of their personality. This approach has helped me consistently
        exceed expectations, whether I'm working on a startup MVP, a corporate
        platform, or my own personal projects.
      </Typography>
    </Stack>
  );
}

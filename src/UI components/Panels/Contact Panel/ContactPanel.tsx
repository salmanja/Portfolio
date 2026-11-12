import { Stack, Box, Typography, Divider, IconButton } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactForm from "./ContactForm";

export default function ContactPanel() {
  return (
    <Stack
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        p: 4,
      }}
    >
      <Typography variant="h4" color="text.primary">
        Get in touch!
      </Typography>
      <Divider sx={{ width: "100%" }} />

      <Box
        sx={{
          backgroundColor: "background.section",
          padding: 1,
          borderColor: "divider",
        }}
      >
        <ContactForm />
      </Box>

      <Typography variant="h6" color="text.primary">
        Or find me on
      </Typography>
      <Divider sx={{ width: "100%" }} />

      <Box
        sx={{
          backgroundColor: "background.section",
          padding: 1,
          borderColor: "divider",
        }}
      >
        <IconButton
          href="mailto:jamilah.salman@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactMailIcon color="success" fontSize="large" />
        </IconButton>
        <IconButton
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon color="secondary" fontSize="large" />
        </IconButton>
        <IconButton
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon color="primary" fontSize="large" />
        </IconButton>
      </Box>
    </Stack>
  );
}

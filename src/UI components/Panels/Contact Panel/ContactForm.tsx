import { Box, Stack, TextField, Button } from "@mui/material";

export default function ContactForm() {
  return (
    <Box component="form" autoComplete="off">
      <Stack spacing={3} color="text.secondary">
        <TextField
          label="Name"
          required
          variant="standard"
          sx={{ width: "25ch" }}
        >
          Name
        </TextField>
        <TextField
          label="Email"
          required
          variant="standard"
          sx={{ width: "25ch" }}
        >
          Email
        </TextField>
        <TextField
          label="Message"
          required
          variant="filled"
          rows={4}
          multiline
          fullWidth
        >
          Message
        </TextField>
        <Button
          sx={{
            backgroundColor: "secondary.main",
            color: "#fff",
            "&:hover": {
              bgcolor: "hover.primary",
              color: "hover.secondary",
            },
            border: 1,
            borderRadius: 1,
            borderColor: "divider",
          }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

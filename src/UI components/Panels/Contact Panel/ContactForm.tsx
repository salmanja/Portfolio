import { Box, Stack, TextField, Button } from "@mui/material";

export default function ContactForm() {
  return (
    <Box component="form" autoComplete="off">
      <Stack spacing={2}>
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
      </Stack>
      <Button>Submit</Button>
    </Box>
  );
}

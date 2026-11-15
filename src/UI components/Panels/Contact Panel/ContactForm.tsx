import { Stack, TextField, Button } from "@mui/material";

export default function ContactForm() {
  return (
      <Stack
        component="form"
        spacing={3}
        autoComplete="off"
        color="text.secondary"
      >
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
          size="large"
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
            alignSelf: "flex-start",
          }}
        >
          Submit
        </Button>
      </Stack>
  );
}

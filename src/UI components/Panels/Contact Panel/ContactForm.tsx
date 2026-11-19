import { Stack, TextField, Button } from "@mui/material";

export default function ContactForm() {
  return (
      <Stack
        component="form"
        spacing={3}
        autoComplete="off"
        color="text.secondary"
        sx={{width: "100%"}}
      >
        <TextField
          label="Name"
          required
          variant="standard"
          fullWidth
        >
          Name
        </TextField>
        <TextField
          label="Email"
          required
          variant="standard"
          fullWidth
        >
          Email
        </TextField>
        <TextField
          label="Message"
          required
          variant="standard"
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

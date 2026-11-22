import { Stack, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "20301e90-fb3c-4d06-8acd-14b74c661485");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <>
      <Stack
        component="form"
        onSubmit={onSubmit}
        spacing={3}
        autoComplete="off"
        color="text.secondary"
        sx={{ width: "100%" }}
      >
        <TextField name="name" label="Name" required variant="standard" fullWidth>
          Name
        </TextField>
        <TextField name="email" type="email" label="Email" required variant="standard" fullWidth>
          Email
        </TextField>
        <TextField
          name="message"
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
          type="submit"
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
      <Typography sx={{ p: 4 }}>{result}</Typography>
    </>
  );
}

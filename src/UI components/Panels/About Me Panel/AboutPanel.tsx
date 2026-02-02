import { Typography, Avatar,  Stack } from "@mui/material";
import AboutImage from "./A9829537-0357-49A9-B05C-67E5027B86A8.jpeg";

export default function AboutPanel(){
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
       <Typography variant="body1">About Me</Typography>
     </Stack>
   );
}
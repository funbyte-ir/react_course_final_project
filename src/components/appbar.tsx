import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { IoMenu } from "react-icons/io5";

export default function MyAppBar(){
    return <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mx: 2 }}
          >
            <IoMenu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            فان بایت
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>;
}
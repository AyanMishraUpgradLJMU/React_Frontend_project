import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Container, InputAdornment, TextField } from "@mui/material";


const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };

  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate replace to= "/Login" />;
  } else {
    return (
        <AppBar>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <ShoppingCartIcon />
                </IconButton>
                
                <Typography variant="h6"
                    component="div" sx={{ width: 400 }}>
                    upGrad E-Shop
                </Typography>

                <Container maxWidth="md" sx={{ mt: 1 }}>
        <TextField
          id="outlined-search-full-width"
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          variant='outlined'
          sx={{
            width: { sm: 600, md: 600 }
          }}
          
          size="small"
          fontSize= "3em"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"><SearchIcon /></InputAdornment>
            ),
            styles: {
              textField: {
                  width: '90%',
                  marginLeft: 'auto',
                  marginRight: 'auto',            
                  paddingBottom: 0,
                  marginTop: 0,
                  fontWeight: 500
              },
              input: {
                  color: 'white'
              }
          },
          }}
          component="div"/>
        </Container>
           
                  <Button color="inherit" href="#">Home</Button>
               
                  <Button color="red" href="#">Logout</Button>
                   
            </Toolbar>
        </AppBar>
        
    );
  }
};

export default Home;
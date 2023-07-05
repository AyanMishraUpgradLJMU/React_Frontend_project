import React from 'react'
import { useState } from "react";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import swal from 'sweetalert';

import './Login.css';
import './Footer.css';

import Footer from "./Footer";
import Home from './Home';

async function loginUser(credentials) {
    return fetch('https://localhost:4000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const Login=()=>{
   
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
          username,
          password
        });
        if ('accessToken' in response) {
          swal("Success", response.message, "success", {
            buttons: false,
            timer: 2000,
          })
          .then((value) => {
            localStorage.setItem('accessToken', response['accessToken']);
            localStorage.setItem('user', JSON.stringify(response['user']));
            window.location.href = <Home />;
          });
        } else {
          swal("Failed", response.message, "error");
        }
      }


    const paperStyle={padding :100,height:'80vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#FF0000'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form className='input-form' noValidate onSubmit={handleSubmit}>
                <div className='first-input'>
                <TextField label='Username' placeholder='Enter username' fullWidth required variant='outlined' sx={{ m: 2 }}
                onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className='second-input'>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required variant='outlined' sx={{ m: 2 }}
                onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className='login-btn'>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >
                    Sign in
                </Button>
                </div>
                <Typography > Do you have an account ? 
                     <Link href="./Signup" >
                        Sign Up 
                </Link>
                </Typography>
                </form>
            </Paper>
            <Footer/>
        </Grid>
        
        
    )
}

export default Login
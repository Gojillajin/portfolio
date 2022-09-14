import './App.css';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { CheckBox } from '@mui/icons-material';
import { FormControlLabel, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <Container 
    maxWidth="sm"
    >
      <Box
        sx={{
          marginTop : 8,
          display : 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <HomeIcon color='primary' fontSize='large' />
        <Typography component='h1' variant='h5' color='primary' >
          로그인
        </Typography>
        <TextField 
        id="userEmail'" 
        label="아이디" 
        variant="outlined" 
        fullWidth
        margin='normal'
        size='small' />
        <TextField 
        id="passWord" 
        label="비밀번호" 
        variant="outlined" 
        fullWidth
        size='small'
        />
        <FormControlLabel control={<CheckBox 
        value='remember' 
        color='primary'/>}
        label='로그인 상태 유지'
        sx={{mt:2}}
        >
        </FormControlLabel>
        
        <Button 
        variant="contained" 
        fullWidth
        sx={{mt:2, mb:2}}
        >로그인
        </Button>
        
        <Grid container >
          <Grid item xs >
            <Link href="#" underline="none">
              {'회원가입'}
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none">
              {'아이디/비밀번호 찾기'}
            </Link>
          </Grid>
        </Grid>
      
      </Box>
    </Container>
  );
}

export default App;

import './App.css';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

function App() {
  return (
    <Container maxWidth="sm">
      <HomeIcon color='primary' />
      <h1>개포웹</h1>
      <TextField 
      id="userEmail'" 
      label="@User-Email" 
      variant="outlined" 
      fullWidth
      margin='normal' />
      <TextField 
      id="passWord" 
      label="password" 
      variant="outlined" 
      fullWidth
       />
      <Button 
      variant="contained" 
      fullWidth>Sign In</Button>
      <Link href="#" underline="none">
        {'아이디 찾기'}
      </Link>
      <Link href="#" underline="none">
        {'비밀번호 찾기'}
      </Link>
      <p><Link href="#" underline="none">
        {'회원 가입'}
      </Link></p>

    </Container>
  );
}

export default App;

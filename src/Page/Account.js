import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

export default function Account () {
    return (
        <div>
            <Container 
                maxWidth="sm"
                >
                
                <TextField 
                    id="AcntUserEmail'" 
                    label="abcde@xxxx.xxx" 
                    variant="outlined" 
                    fullWidth
                    margin='dense'
                    size='small' />

                <TextField 
                    id="Acntpw'" 
                    label="비밀번호" 
                    variant="outlined" 
                    fullWidth
                    margin='dense'
                    size='small' />

                <TextField 
                    id="chkAcntpw'" 
                    label="비밀번호 확인" 
                    variant="outlined" 
                    fullWidth
                    margin='dense'
                    size='small' />

                <TextField 
                    id="phoneNum'" 
                    label="xxx-xxxx-xxxx" 
                    variant="outlined" 
                    fullWidth
                    margin='dense'
                    size='small' />
            </Container>
        </div>
    );
}
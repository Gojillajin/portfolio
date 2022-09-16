import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { FormControlLabel, Grid, Typography } from '@mui/material';


export default function Account () {
    return (
        <div>
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

                    <Grid container alignItems="center" >
                        <Grid >
                            <Button 
                                variant="contained"
                                size='large'
                                sx={{
                                    width:'400',
                                    ml:3,
                                    }} 
                                >등록
                                </Button>
                        </Grid>
                        <Grid >
                            <Button 
                                variant="contained" 
                                size='large'
                                sx={{
                                    width:'400',
                                    }}
                                >취소
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </div>
    );
}
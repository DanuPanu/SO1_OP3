import { Box, Button, TextField, Typography } from '@mui/material';

const Kirjautuminen : React.FC = () : React.ReactElement => {

    return(
        <>
            <Box sx={{gridArea : "Kirjautuminen", 
                display : "flex", 
                flexDirection : "column",
                }}>
                <Typography variant = "h5">Kirjautuminen</Typography>
                <TextField color = "error" placeholder = "Tunnus..." sx={{width : "90%"}}></TextField>
                <TextField color = "error" placeholder = "Salasana..." sx={{marginTop : "5px",
                width : "90%"
                }}></TextField>

                <Button color = "error" variant = "contained" sx={{
                    marginTop : "5px",
                    width : "90%"
                }}>Kirjaudu</Button>
            </Box>
        </>
    );
};

export default Kirjautuminen
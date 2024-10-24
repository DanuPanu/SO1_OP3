import { Box, Typography } from '@mui/material';

const Footer : React.FC = () : React.ReactElement => {

    return(
        <>
            <Box sx={{textAlign : 'center', gridArea : "Footer", backgroundColor : "lightgrey"}}>
                <Typography variant = "body1"
                sx={{
                    padding : "10px"
                }}>Puh: 123 456 789, Email: Paitakauppa@jeps.fi ©2023</Typography>
            </Box>
        </>
    );
};

export default Footer
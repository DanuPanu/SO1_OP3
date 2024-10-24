import { Box, Typography } from '@mui/material';

const Header : React.FC = () : React.ReactElement => {

    return(
        <>
            <Box sx={{ textAlign : 'center', gridArea : "Header"}}>
                <Typography  variant = "h3" sx={{
                    padding : "5px",
                    marginBottom : "10px",
                    backgroundColor : "lightgrey"
                }}>Paitakauppa</Typography>
            </Box>
        </>
    );
};

export default Header
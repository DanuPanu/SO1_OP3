import { Box, Button, Typography } from '@mui/material';

interface Props{
    children? : any
    hinta : number
    hinta2 : number
    maara : number
    nakyy : string
};

const Ostoskori : React.FC<Props> = (props : Props) : React.ReactElement => {

    const yhteensa = (Math.round((props.hinta + props.hinta2) * 100) / 100).toFixed(2);

    return(
        <>
            <Box sx={{gridArea : "Ostoskori", width : "210px"}}>
                <Typography variant = "h5">Ostoskori</Typography>
                <Typography sx={{
                    border : "2px solid #ef5350",
                    borderRadius : "8px",
                    marginRight : "10px",
                    padding : "5px"
                }}>{(props.nakyy === "none")
                    ? 'Ostoskorisi on tyhjä' 
                    : `Ostoskorissasi ${props.maara} tuotetta, loppusumma ${yhteensa} e`
                }</Typography>
                <Button color = "error" 
                variant = "contained"
                onClick = {() => {alert("Jatketaan tilaukseen...")}} 
                    sx={{
                    display : `${props.nakyy}`,
                    marginTop : "5px",
                    width : "95%"
                    }}>Tilaa Tuotteet</Button>
            </Box>
        </>
    );
};

export default Ostoskori
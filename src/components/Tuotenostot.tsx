import { Box, Button, Typography } from '@mui/material';
import '../App.css';
import kuva1 from '../kuva1.jpeg'
import kuva2 from '../kuva2.jpeg'
import kuva3 from '../kuva3.jpeg'
import kuva4 from '../kuva4.jpeg'
import kuva5 from '../kuva5.jpeg'
import kuva6 from '../kuva6.jpeg'

interface Props{
    paivitaHinta : () => void
    paivitaHinta2 : () => void
    paivitaMaara : () => void
    paivitaNakyy : () => void
};

const Tuotteet : React.FC<Props> = (props : Props) : React.ReactElement => {


    return(
        <>
            <Box sx={{
                gridArea : "Tuotteet",
                display : "grid", 
                gridTemplateColumns : "repeat(3, 1fr)",
                gap : "10px",
                margin : "10px"}}>
                <div style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
                    <img src={kuva1} alt="On time " width="80%" height="80%"></img>
                    <Typography>On time 24,99 euroa</Typography>
                    <Button color = "error"
                        onClick={() : void => { 
                        props.paivitaHinta2()
                        props.paivitaMaara()
                        props.paivitaNakyy()}}
                        >Lisää Ostoskoriin</Button>
                </div>
                <div style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
                    <img src={kuva2} alt="First Time Daddy" width="80%" height="80%"></img>
                    <Typography>First Time Daddy 19,99 euroa<br></br></Typography>
                    <Button color = "error"
                        onClick={() : void => { 
                        props.paivitaHinta()
                        props.paivitaMaara()
                        props.paivitaNakyy()}}
                        >Lisää Ostoskoriin</Button>
                </div>
                <div style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
                    <img src={kuva3} alt="Eat Sleep Gym" width="80%" height="80%"></img>
                    <Typography>Eat Sleep Gym 24,99 euroa<br></br></Typography>
                    <Button color = "error"
                        onClick={() : void => { 
                        props.paivitaHinta2()
                        props.paivitaMaara()
                        props.paivitaNakyy()}}
                    >Lisää Ostoskoriin</Button>
                </div>
                <div style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
                    <img src={kuva4} alt="Teacher" width="80%" height="80%"></img>
                    <Typography>Teacher 19,99 euroa<br></br></Typography>
                    <Button color = "error"
                        onClick={() : void => { 
                        props.paivitaHinta()
                        props.paivitaMaara()
                        props.paivitaNakyy()}}
                        >Lisää Ostoskoriin</Button>
                </div>
                <div style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
                    <img src={kuva5} alt="Never Give Up" width="80%" height="80%"></img>
                    <Typography>Never Give Up 19,99 euroa<br></br></Typography>
                    <Button color = "error"
                        onClick={() : void => {
                        props.paivitaHinta()
                        props.paivitaMaara()
                        props.paivitaNakyy()}}
                        >Lisää Ostoskoriin</Button>
                </div>
                <div style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
                    <img src={kuva6} alt="Vegan Force" width="80%" height="80%"></img>
                    <Typography>Vegan Force 19,99 euroa<br></br></Typography>
                    <Button color = "error"
                        onClick={() : void => { 
                        props.paivitaHinta()
                        props.paivitaMaara()
                        props.paivitaNakyy()}}
                        >Lisää Ostoskoriin</Button>
                </div>
            </Box>
        </>
    );
};

export default Tuotteet
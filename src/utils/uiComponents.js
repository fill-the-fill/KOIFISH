import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from "../utils/images/BG.png"

export const useStyles = makeStyles((theme) => ({
    backgroundImage: {
        padding: '0px 100px',
        // height: 4000,
        backgroundImage: `url(${BackgroundImage})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',  
        // background: 'red' 
    },
    koiLogo: {
        width: '50%',
        display: 'block',
        margin: 'auto'
    },
    buyButton: {
        textAlign: 'center',
        color: 'white',
        border: '1px solid white',
        borderRadius: 5,
        display: 'block',
        margin: 'auto',
        fontSize: 20,
        '&:hover': {
            backgroundColor: '#C3B96C',
            border: '1px solid black',
            color: 'black'
        },
    },
    title: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 30,
        paddingTop: 90
    },
    goldenTitleFish: {
        display: 'block',
        margin: 'auto',
        width: 70,
    },
    historyText: {
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '0px 50px',
        marginTop: 20,
    },
    line: {
        width: 200
    },
    futureRock: {
        // maxWidth: 100
    },
    futureDate: {
        color: '#707070'
    },
    futureName: {
        color: '#C3B96C',
    },
    futureDescription: {
        color: '#FFFFFF'
    },
    statistics: {
        width: '70%',
        margin: 'auto',
        display: 'block'
    },
    member: {
        padding: '0 30px'
    },
    teamImage: {
        width: '90%',
        height: 250,
        margin: 'auto',
        display: 'block'
    },
    teamName: {
        textAlign: 'center',
        marginTop: 10,
        color: '#C3B96C'
    },
    teamAbout: {
        textAlign: 'center',
        color: 'white',
        padding: '0px 50px'
    },
    linkedinIcon : {
        color: '#C3B96C'
    },
    facebookIcon: {
        color: '#C3B96C'
    },
    facebookGrid: {
        marginLeft: 'auto',
        paddingTop: 5,
    },
    linkedinGrid: {
        marginRight: 'auto',
        paddingTop: 5,
    },
    footer: {
        marginTop: 'calc(5% + 60px)',
        bottom: 0,
        textAlign: 'center',
        margin: 'auto',
        color: 'white'
    },
    privacyRedirect: {
        color: 'white'
    }
}));

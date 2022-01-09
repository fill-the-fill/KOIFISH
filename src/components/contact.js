import React, { useRef, useState } from 'react';
import { useStyles } from "../utils/uiComponents";
import { Grid, Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import emailjs from "emailjs-com"

export default function ContactUs() {
    const form = useRef();
    let classes = useStyles()
    const [open, setOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Gmail', 'template_2pr429l', form.current, 'user_69PmLGskku8FpyO3EbXvj')
            .then((result) => {
                console.log(result.text);
                handleClickOpen();
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container justifyContent="center">
            <Typography variant="h1" style={{ padding: '20px 0px' }}>Contact Us</Typography>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ display: 'block', padding: '0px 20%' }}
            >

                <form ref={form} onSubmit={sendEmail}>
                    <Grid item>
                        <Typography className={classes.contactTypography}>Full Name</Typography>
                        <input className={classes.contactTextfield} type="text" name="user_name" />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.contactTypography}>Email Address</Typography>
                        <input className={classes.contactTextfield} type="email" name="user_email" />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.contactTypography}>Message</Typography>
                        <textarea className={classes.contactTextfieldText} name="message" />
                    </Grid>
                    <Grid item>
                        <Button type="submit" className={classes.homeButton}>Send Message</Button>
                    </Grid>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                    >
                        <DialogContent style={{background: '#72878e'}}>
                            <DialogContentText style={{color: '#ffff', fontSize: 25}}>
                                Thank you for contacting us, our representative will contact you shortly!
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions style={{background: '#72878e'}}>
                            <Button onClick={handleClose} style={{color: '#C3B96C', fontSize: 25}}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </form>
            </Grid>
        </Grid>

    );
};
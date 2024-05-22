import React from "react";
import wallpaper from '../../../public/wp001.svg'
import diht from '../../../public/logo diht.svg'
import { Box, Container, Grid, Typography } from "@mui/material";


export default function SectionWelcome() {
    const wpSrc = wallpaper.src;
    return (
        <Box sx={{
            display: 'flex',
            backgroundImage: `url(${wpSrc})`,
            bgcolor: '#0F3057',
            position: 'relative',
            width: '100%',
            height: '100vh',
            boxShadow: 'inset 0px -120px 60px 0px #0F3057',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Container fixed sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid container spacing={0} sx={{ width: '100%', mb: { md: '160px', xs: '0' } }}>
                    <Grid item xs={12} md={6} sx={{ width: '100%' }}>
                        <Typography sx={{ color: 'yellow', fontSize: '36px', textShadow: '4px -1px 1px black', textAlign: { md: 'left', xs: 'center' }, lineHeight: '47px' }}>Do i have time?</Typography>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '20px', textShadow: '4px -1px 1px black', textAlign: { md: 'left', xs: 'center' }, lineHeight: '30px' }}>Discover if you have time to play your games</Typography>
                    </Grid>

                </Grid>
            </Container>


        </Box>
    )
}
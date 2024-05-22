import { Box, Container, Grid, Typography, p }from "@mui/material";
import diht from '../../../public/logo diht.svg'
import React from "react";
import Image from "next/image";


export default function AboutSection() {
    return (
        <>
            <Box sx={{ height: 'auto', bgcolor: '#0F3057', display: 'flex', flexDirection: 'column' }}>
                <Container fixed sx={{display: 'flex', flexDirection: 'column', paddingTop: '60px', paddingBottom: '40px'}}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sx={{mb: '12px'}}>
                            <h2 style={{ color: 'yellow', textAlign: 'center', textShadow: '4px -1px 1px black', letterSpacing: '2px' }}>About</h2>
                        </Grid>
                        <Grid item xs={12} md={12} sx={{display: 'flex', flexDirection: 'column', gap: '20px', mt: '20px' }}>
                            <Typography sx={{ color: '#FFF', fontSize: '14px', textAlign: { md: 'left', xs: 'center' }, lineHeight: '24px', textShadow: '4px -1px 1px black' }}>
                                Do you work or study, have a busy day, but still want to find time to play your favorite games? This application is the perfect solution to help you manage your time and make the most of every moment of fun!
                            </Typography>
                            <Typography sx={{ color: '#FFF', fontSize: '14px', textAlign: { md: 'left', xs: 'center' }, lineHeight: '24px', letterSpacing: '2px', textShadow: '4px -1px 1px black' }}>
                            This application is built using the HowLongToBeat API, which has a huge collection of games.
                            </Typography>
                            <Typography sx={{ color: '#FFF', fontSize: '14px', textAlign: { md: 'left', xs: 'center' }, lineHeight: '24px', letterSpacing: '2px', textShadow: '4px -1px 1px black' }}>
                            Don't let your busy schedule stop you from having fun. Try our application and transform the way you manage your gaming time!
                            </Typography>
                       </Grid>
                        <Grid item xs={12} md={6} sx={{ mt: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <Box sx={{width: '100%', height: '100%', position: 'relative'}}>
                                <Image src={diht} layout="fill" objectFit="contain"/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
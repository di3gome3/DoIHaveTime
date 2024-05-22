"use client"
import { Box, Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";

export default function GameCard({ gameName, image, main, mainExtras, comp, hours, mainDays, compDays }) {
    const [expanded, setExpanded] = useState(false);

    const handleToggleAccordion = () => {
        setExpanded(!expanded);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: '#254069', borderRadius: '8px', padding: '10px', gap: '14px' }}>
            <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <Typography sx={{ textAlign: 'center', color: '#e0e0e0', fontSize: '10px', lineHeight: '16px' }}>
                        {gameName}
                    </Typography>
                    <img src={image} style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }} alt="gameImage" />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: '#e0e0e0', fontSize: '10px', lineHeight: '16px' }}>
                            Main: {main} hours
                        </Typography>
                        <Typography sx={{ color: '#e0e0e0', fontSize: '10px', lineHeight: '16px' }}>
                            Main + Extras: {mainExtras} hours
                        </Typography>
                        <Typography sx={{ color: '#e0e0e0', fontSize: '10px', lineHeight: '16px' }}>
                            Completionist: {comp} hours
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Accordion expanded={expanded} onChange={handleToggleAccordion} sx={{ width: '100%', bgcolor: '#254069', color: '#e0e0e0' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: '#e0e0e0' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ margin: 0, fontSize: '10px', lineHeight: '16px', color: '#e0e0e0' }}>
                                Time Details
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <Typography sx={{ color: '#e0e0e0', fontSize: '10px', lineHeight: '16px', textAlign: 'center' }}>
                                    Playing {hours} hours per day you will finish the main story in {mainDays} days and for complete 100% {compDays} days
                                </Typography>
                            </Box>

                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Box>
    );
}

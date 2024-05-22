"use client";
import { useEffect } from 'react';
import GameCard from '@/components/GameCard';
import { Grid, Box, Typography, Button, TextField, Container, CircularProgress } from '@mui/material';
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function AppTime() {
  const [gameName, setGameName] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState('');
  const [gameResults, setGameResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleSearch = async () => {
    if (!gameName || !hoursPerDay) return;

    setLoading(true);

    try {
      const response = await fetch(`/api/howlongtobeat?gameName=${gameName}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      // Calcular o número de dias necessários para cada jogo
      const resultsWithDays = data.map(game => {
        const mainDays = Math.ceil(game.gameplayMain / hoursPerDay);
        const mainExtrasDays = Math.ceil(game.gameplayMainExtra / hoursPerDay);
        const completionistDays = Math.ceil(game.gameplayCompletionist / hoursPerDay);

        return { ...game, mainDays, mainExtrasDays, completionistDays };
      });

      setGameResults(resultsWithDays);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Container fixed sx={{ display: 'flex', flexDirection: 'column', mt: '40px' }}>
        <Grid data-aos="zoom-in" container spacing={2}>

          <Grid item xs={12}>
            <Typography variant='h2' sx={{ textAlign: 'center', color: 'yellow', lineHeight: '30px', letterSpacing: '2px', textShadow: '4px -1px 1px black', mb: '40px' }}>
              Search games that you want to play
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Typography sx={{ color: '#FFF', fontSize: '14px', textAlign: 'center', lineHeight: '24px', letterSpacing: '2px', textShadow: '4px -1px 1px black', mt: {md: '40px', xs: '0'}, padding: {md: '20px', xs: '0'} }}>
              Enter the number of hours you want to play per day and the name of the game.
            </Typography>

          </Grid>

          <Grid item xs={12} md={6}>

            <TextField
              label="Enter game name"
              value={gameName}
              required
              onChange={(e) => setGameName(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'yellow', // Cor da borda
                  },
                  '&:hover fieldset': {
                    borderColor: 'yellow', // Cor da borda ao passar o mouse
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff', // Cor da borda ao focar
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'yellow', // Cor do label
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#FFFFFF', // Cor do label ao focar
                },
                input: {
                  color: '#FFFFFF', // Cor do texto
                },
              }}
            />
            <TextField
              label="Enter hours per day"
              value={hoursPerDay}
              required
              onChange={(e) => setHoursPerDay(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'yellow', // Cor da borda
                  },
                  '&:hover fieldset': {
                    borderColor: 'yellow', // Cor da borda ao passar o mouse
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff', // Cor da borda ao focar
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'yellow', // Cor do label
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#FFFFFF', // Cor do label ao focar
                },
                input: {
                  color: '#FFFFFF', // Cor do texto
                },
              }}
            />
            <Button variant="contained" color="primary" onClick={handleSearch} fullWidth sx={{ marginTop: '20px' }}>
              Search
            </Button>
          </Grid>

        </Grid>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2} sx={{ marginTop: '20px' }}>
            {gameResults.map((game) => (
              <Grid item xs={12} md={6} key={game.id} data-aos="zoom-in">
                <GameCard
                  gameName={game.name}
                  image={game.imageUrl}
                  main={game.gameplayMain}
                  mainExtras={game.gameplayMainExtra}
                  comp={game.gameplayCompletionist}
                  hours={hoursPerDay}
                  mainDays={game.mainDays}
                  compDays={game.completionistDays}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

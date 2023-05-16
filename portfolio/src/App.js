import { Box , Tab, Tabs, createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Home from './Pages/Home/Home.js'
import Exhibition from './Pages/Exhibition/Exhibition.js'
import TabPortfolio from './Pages/TabPortfolio/TabPortfolio.js'
import CV from './Pages/CV/CV.js'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  
function App() {
    const [value, setValue] = useState('');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <ThemeProvider theme={darkTheme}>
        <Box sx={{ marginLeft: '20%', marginRight: '20%'}}>
        <BrowserRouter>
          <Tabs value={value} onChange={handleChange} centered >
            <Tab label="Home" value="" href="/"/>
            <Tab label="Portfolio" value="Exhibition" href="/Exhibition"/>
            <Tab label="Tableau Récapitulatif" value="TabPortfolio" href="/TabPortfolio"/>
            <Tab label="Curriculum vitæ" value="CV" href="/CV"/>
            </Tabs>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Exhibition" element={<Exhibition />} />
                <Route path="/TabPortfolio" element={<TabPortfolio />} />
                <Route path="/CV" element={<CV />} />
            </Routes>
        </BrowserRouter>
    </Box>
    </ThemeProvider>
    )
}

export default App

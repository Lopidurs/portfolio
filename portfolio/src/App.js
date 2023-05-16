import { Box , Tab, createTheme, ThemeProvider } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
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
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <ThemeProvider theme={darkTheme}>
        <Box sx={{ marginLeft: '20%', marginRight: '20%'}}>
      <TabContext value={value}>
          <TabList onChange={handleChange} centered >
            <Tab label="Home" value="1" />
            <Tab label="Portfolio" value="2" />
            <Tab label="Tableau Récapitulatif" value="3" />
            <Tab label="Curriculum vitæ" value="4" />
          </TabList>
            <TabPanel value="1"><Home /></TabPanel>
            <TabPanel value="2"><Exhibition /></TabPanel>
            <TabPanel value="3"><TabPortfolio /></TabPanel>
            <TabPanel value="4"><CV /></TabPanel>
      </TabContext>
    </Box>
    </ThemeProvider>
    )
}

export default App

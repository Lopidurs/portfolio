import { Box , Tab, Tabs, createTheme, ThemeProvider } from '@mui/material'
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
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <ThemeProvider theme={darkTheme}>
        <Box sx={{ marginLeft: '20%', marginRight: '20%'}}>
          <Tabs onChange={handleChange} value={value} centered >
            <Tab label="Home" />
            <Tab label="Portfolio"  />
            <Tab label="Tableau Récapitulatif"  />
            <Tab label="Curriculum vitæ" />
          </Tabs>
            <TabPanel value={value} index={0}><Home /></TabPanel>
            <TabPanel value={value} index={1}><Exhibition /></TabPanel>
            <TabPanel value={value} index={2}><TabPortfolio /></TabPanel>
            <TabPanel value={value} index={3}><CV /></TabPanel>
    </Box>
    </ThemeProvider>
    )
}

function TabPanel({ children, value, index }) {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && (
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    );
  }
export default App

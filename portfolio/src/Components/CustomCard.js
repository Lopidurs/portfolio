import { Box, Modal, Typography } from '@mui/material';
import { useState } from 'react';

import './CustomCard.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  maxHeight: 600, 
  overflow: 'auto',
  border: 'none',
  boxShadow: 24,
  borderRadius: 8,
  p: 4,
};


function CustomCard({ image, title, time, realTime, description, theme, improvements, proofs }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Box
      className='card'
      sx={{
        borderRadius: 3,
      }}
      onClick={handleOpen}
    >
      <img src={image} alt="" />
    </Box>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography variant="h3">
        {title}
      </Typography>
      <Typography variant="h6">
        {theme}
      </Typography>
      <div className='modal-time'>
        <Typography sx={{ mt: 3 }} variant="h4">
        Valorisation: {time}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="h4">
        Heures passées: {realTime}
        </Typography>
      </div>
      <div>
        <Typography sx={{ mt: 8 }} variant="h5">
          Description:
        </Typography>
        <Typography sx={{ mt: 2 }}>
          {description?.map((item, index) => <div key={index}>{item}</div>)}
        </Typography>
      </div>
      <div>
        <Typography sx={{ mt: 8 }} variant="h5">
          Connaissances et compétences acquises:
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <ul>
          {improvements?.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </Typography>
      </div>
      <div className='modal-image'>
        {proofs?.map((item, index) => <img key={index} src={item} alt="" />)}
      </div> 
    </Box>
  </Modal>
    </>
    
 );
}

export default CustomCard

import React, { useEffect } from 'react';
import { Box, Button,} from '@mui/material'
import { Grid, TextField } from '@material-ui/core';
import axios from 'axios';

const Dashboard = ({ description, link, timer, visible, setDescription, setLink, setTimer, setVisible }) => {

  const handleSave = () => {
    axios.post('http://localhost:5000/api/banner', { description, link, timer, visible })
      .then(response => {
        if (response.status === 200) {
          axios.get('http://localhost:5000/api/banner')
            .then(response => {
              const { description, link, timer, visible } = response.data;
              setDescription(description);
              setLink(link);
              setTimer(timer);
              setVisible(visible);
            });
        }
        alert("Banner updated successfully");
      })
      .catch(error => alert('Error updating banner.'));
  };

  return (
    <Box sx={{margin:'25px'}}>
      <Grid container spacing={4}>
            <Grid item xs={6} >
                <Box className='border rounded-s-md shadow-md p-5'>
                    <form>
                      <Grid container spacing={3}>
                        <Grid item xs={12}  sm={6}>
                            <TextField type="text" value={description} onChange={e => setDescription(e.target.value)}  required id='firstName' name='description' label='Description' fullWidth autoComplete='given-name'/>
                        </Grid>

                        <Grid item xs={12}  sm={6}>
                            <TextField type="text" value={link} onChange={e => setLink(e.target.value)}s required id='lastName' name='link' label='Link' fullWidth autoComplete='given-name'/>
                        </Grid>

                        <Grid item xs={12} >
                            <TextField value={timer} onChange={e => setTimer(e.target.value)} required id='timer' name='Timer in second' label='Timer in Seconds' fullWidth autoComplete='given-name'/>
                        </Grid>                  

                        <Grid item xs={12}>
                           <label>
                             Banner Visible:
                           </label>
                          <input type="checkbox" checked={visible} onChange={e => setVisible(e.target.checked)} />
                        </Grid>

                        <Grid item xs={12}>
                          <Button type='button' onClick={handleSave} size='large' variant='contained' sx={{py:1, mt:2, backgroundColor:'RGB(145,85,253)'}}>
                            Save
                          </Button>
                        </Grid>

                      </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    </Box>
  );
};

export default Dashboard;

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';

import './home.css';
import Table1 from './table';
import { Link } from 'react-router-dom';
import CustomizedDialogs from './cc';



const Content=()=>{
    return <Grid class='content' container spacing={1}>
    <Grid item xs={2}>
    <div class='table'>
      
      <CustomizedDialogs/>
<Table1/>
    </div>
    </Grid>
    <Grid item xs={10}>
   <div  class='bloggs'>
   <Button color="success" variant="contained">Contained</Button>
   </div>
    </Grid>
  </Grid>
}

export default Content;
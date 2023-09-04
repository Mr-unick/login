import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';

import './home.css';



const categaries=
   [{id:1,type:'Music'}, {id:2,type:'Sports'}, {id:3,type:'Movei'}, {id:3,type:'politics'}]


const Table1=()=>{
    return <Table class='tab'>
<TableHead>
    <TableRow>
        <TableCell> All Categaries</TableCell>
    </TableRow>
</TableHead>
<TableBody>
    {
        categaries.map(cate => {
           return <TableRow>
            <TableCell>{cate.type}</TableCell>
            </TableRow>
        })
    }
   
</TableBody>
    </Table>
    
}
 
export default Table1;
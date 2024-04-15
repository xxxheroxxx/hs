import './App.css';

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExportContainer,
  GridCsvExportMenuItem,
} from '@mui/x-data-grid';

import { useDemoData } from '@mui/x-data-grid-generator';

function CustomToolbar() {
  return (
    <GridToolbarContainer >
      <GridToolbarExportContainer >
        <GridCsvExportMenuItem options={{ delimiter: ';' }} />
      </GridToolbarExportContainer>
    </GridToolbarContainer>
  );
}

function App() {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6,
  });

  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              111
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ height: '100vh', width: '100%', display: 'flex', border: '1px dashed grey', mt:6 }}>
        <Box sx={{ width: 300, flex: '0 0 auto', border: '1px dashed grey' }}>
          <Box sx={{ height: '100vh', width: '100%', display: 'flex', border: '1px dashed grey' }}>
            <Typography variant="h4" >
              222
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1, border: '1px dashed grey' }}>
          <Box sx={{ flex: 1, border: '1px dashed grey' }}>
            <DataGrid {...data} slots={{ toolbar: CustomToolbar }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;

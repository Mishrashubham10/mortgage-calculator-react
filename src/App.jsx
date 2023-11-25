import Navbar from './components/Navbar';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';
import Result from './components/Result';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000,
    loanAmount: 3000,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} alignItems='center'>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Stack, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { downPayment, homeValue, loanAmount, interestRate, loanTerm } = data;

  const totalLoamMonth = loanTerm * 12; // 60 months = 5 years
  const interestPerMonth = interestRate / 100 / 12;

  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoamMonth) /
    ((1 + interestPerMonth) ** totalLoamMonth - 1);

  const totalInterestGenerated = monthlyPayment * totalLoamMonth - loanAmount;

  const chartData = {
    labels: ['Principle', 'Interest'],
    datasets: [
      {
        label: 'Ration of Principle and Interest',
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={2}>
      <Typography textAlign="center" variant="h5">
        Monthly Payment : $ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={chartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default Result;
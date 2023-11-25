/* eslint-disable react/prop-types */
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const SliderComponent = ({
  min,
  max,
  defaultValue,
  step,
  onChange,
  value,
  label,
  unit,
  amount,
}) => {
  return (
    <>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value}
        marks
        step={step}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </>
  );
};

export default SliderComponent;
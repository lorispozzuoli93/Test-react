import * as React from 'react';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  background: '#F7F9FC',
  display: 'none',

  [theme.breakpoints.up('sm')]: {
    display: 'unset,'
  },
}))

const StyledToggleButton = styled(ToggleButton)(() => ({
  border: 'none',
  textTransform: 'capitalize',

  '&.Mui-selected, &.Mui-selected:hover :not(span)': {
    background: '#F7F9FC',

    'span:nth-child(1)': {
      backgroundColor: '#FFF',
      borderRadius: '4px',
    }
  }
}))

const ToggleButtonHeader: React.FC = () => {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <StyledToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <StyledToggleButton value="all"><span>All</span></StyledToggleButton>
      <StyledToggleButton value="active"><span>Active</span></StyledToggleButton>
      <StyledToggleButton value="offline"><span>Offline</span></StyledToggleButton>
      <StyledToggleButton value="archived"><span>Archived</span></StyledToggleButton>
    </StyledToggleButtonGroup>
  )
}

export default ToggleButtonHeader
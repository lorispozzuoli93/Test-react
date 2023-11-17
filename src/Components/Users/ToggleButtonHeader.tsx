import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

type IProps = {
  handleData: any,
}

const StyledToggleButton = styled(Button)(() => ({
  border: 'none',
  textTransform: 'capitalize',

  '&.Mui-selected, &.Mui-selected:hover :not(span)': {
    background: '#F7F9FC',

    'span:nth-of-type(1)': {
      backgroundColor: '#FFF',
      borderRadius: '4px',
    }
  }
}))

const ToggleButtonHeader: React.FC<IProps> = ({ handleData }) => {
  const [alignment, setAlignment] = React.useState('all')

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment)
  }

  const buttons = [
    {
      name: "All",
      value: "all"
    },
    {
      name: "Active",
      value: "active"
    },
    {
      name: "Offline",
      value: "inactive"
    },
    {
      name: "Archived",
      value: "archived"
    }
  ]


  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      {buttons.map((type, index) => (
          <>
            <StyledToggleButton key={index} value={type.value} onClick={handleData}>
              {type.name}
            </StyledToggleButton>
          </>
        ))}

    </ToggleButtonGroup>
  )
}

export default ToggleButtonHeader
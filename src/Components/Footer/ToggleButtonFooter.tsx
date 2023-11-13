import * as React from 'react';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
    borderRadius: '12px',
}))

const StyledToggleButton = styled(ToggleButton)(() => ({
    width: '40px',
    height: '40px',

    '&.Mui-selected, &.Mui-selected:hover': {
        color: '#5D5FEF',
        background: '#F5F5FF',
    }
}))

const ToggleButtonFooter: React.FC = () => {
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <StyledToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <StyledToggleButton value="1" aria-label="left aligned">
                1
            </StyledToggleButton>
            <StyledToggleButton value="2" aria-label="centered">
                2
            </StyledToggleButton>
            <StyledToggleButton value="3" aria-label="right aligned">
                3
            </StyledToggleButton>
            <StyledToggleButton value="4" aria-label="justified">
                4
            </StyledToggleButton>
        </StyledToggleButtonGroup>
    )
}

export default ToggleButtonFooter
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const StyledToggleButton = styled(ToggleButton)(() => ({
    border: 'none',
    textTransform: 'capitalize',

    '&.Mui-selected, &.Mui-selected:hover :not(span)': {
        background: '#F7F9FC',

        'svg': {
            backgroundColor: '#FFF',
            borderRadius: '4px',
        }
    }
}))

const ToggleButtonUsers: React.FC = () => {
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <StyledToggleButton value="left" aria-label="left aligned">
                <FormatAlignJustifyIcon />
            </StyledToggleButton>
            <StyledToggleButton value="center" aria-label="centered">
                <ViewModuleIcon />
            </StyledToggleButton>
        </ToggleButtonGroup>
    )
}

export default ToggleButtonUsers
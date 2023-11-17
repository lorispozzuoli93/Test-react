import * as React from 'react';
import { styled } from '@mui/material/styles';
import ToggleButtonFooter from './ToggleButtonFooter';
import CollapseButtonFooter from './CollapseButtonFooter';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

type IProps = {
    data: any,
}

const FooterContainer = styled('div')(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.up('sm')]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 32px',
    },
}))

const ButtonContainer = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
}))

const StyledIconButton = styled(IconButton)(() => ({
    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset, 0px 6px 24px 0px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.05)',
    borderRadius: '12px',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    padding: '8px',

    svg: {
        width: '16px',
        height: '16px',
    }
}))

const Footer: React.FC<IProps> = ({ data }) => {
    const usersCount = data.length

    return (
        <FooterContainer>
            {usersCount > 12 && (
                <>
                    <ButtonContainer>
                        <StyledIconButton>
                            <ArrowBackIosIcon />
                        </StyledIconButton>
                        <ToggleButtonFooter />
                        <StyledIconButton>
                            <ArrowForwardIosIcon />
                        </StyledIconButton>
                    </ButtonContainer>
                    <CollapseButtonFooter />
                </>
            )}
        </FooterContainer>
    )
}

export default Footer
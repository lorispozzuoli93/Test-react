import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import { Badge, BadgeProps } from '@mui/material';

type IProps = {
    data?: any,
}

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    minWidth: 'min-content',
    maxWidth: '168px',
    padding: '24px',
    borderRadius: '12px',
    background: '#ffffff',
    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset, 0px 6px 24px 0px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.05)',
    width: '100%',

    "& span:nth-of-type(1)": {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px',
    },

    "& span:nth-of-type(2)": {
        fontSize: '14px',
        color: '#7A8194',
        fontWeight: 400,
        lineHeight: '24px',
    },

    [theme.breakpoints.up('sm')]: {
        width: 'unset',
    },
}))

const StyledCardHeader = styled(CardHeader)(() => ({
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: '12px',
}))

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 4,
        top: 50,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        background: '#4AC1A2',
    },
}))

const CardUsersOnline: React.FC<IProps> = ({ data }) => {
    return (
        <StyledCard>
            <StyledCardHeader
                avatar={
                    <>
                        <StyledBadge badgeContent=" " color="primary">
                            <Avatar sx={{ bgcolor: green[500], width: '56px', height: '56px' }} aria-label="recipe">
                            </Avatar>
                        </StyledBadge>
                    </>
                }
                title={data?.name}
                subheader={data?.email}
            />
        </StyledCard>
    )
}

export default CardUsersOnline
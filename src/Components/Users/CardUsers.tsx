import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { green } from '@mui/material/colors';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Badge, BadgeProps, useMediaQuery, useTheme } from '@mui/material';

type IProps = {
    data?: any,
    alignment?: string | null
}

const StyledCard = styled(Card)(() => ({
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
    }
}))

const StyledCardHeader = styled(CardHeader)(() => ({
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: '12px',
}))

const StyledCardActions = styled(CardActions)(() => ({
    gap: '8px',
    padding: '16px',
}))

const StyledIconButton = styled(IconButton)(() => ({
    width: '32px',
    height: '32px',
    background: '#F2F4F8',
    borderRadius: '10px',

    svg: {
        width: '16px',
        height: '16px',
    }
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

const CardUsers: React.FC<IProps> = ({ data, alignment }) => {
    const usersActive = data?.status === 'active'
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <StyledCard sx={{ maxWidth: isDesktop && alignment === 'left' ? 342 : 239 }}>
            <StyledCardHeader
                avatar={
                    <>
                        {usersActive ? (
                            <StyledBadge badgeContent=" " color="primary">
                                <Avatar sx={{ bgcolor: green[500], width: '56px', height: '56px' }} aria-label="recipe">
                                </Avatar>
                            </StyledBadge>
                        ) : (
                            <Avatar sx={{ bgcolor: green[500], width: '56px', height: '56px' }} aria-label="recipe">
                            </Avatar>
                        )}
                        <StyledCardActions>
                            <StyledIconButton>
                                <ForumRoundedIcon />
                            </StyledIconButton>
                            <StyledIconButton>
                                <MoreHorizRoundedIcon />
                            </StyledIconButton>
                        </StyledCardActions>
                    </>
                }
                title={data?.name}
                subheader={data?.email}
            />
        </StyledCard>
    )
}

export default CardUsers
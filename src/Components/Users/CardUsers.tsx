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

type IProps = {
    data: any
}

const StyledCard = styled(Card)(({ theme }) => ({
    padding: '24px',
    borderRadius: '12px',
    background: '#ffffff',
    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset, 0px 6px 24px 0px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.05)',
    width: '100%',

    "& span:nth-child(1)": {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px',
    },

    "& span:nth-child(2)": {
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

const CardUsers: React.FC<IProps> = ({data}) => {
    return (
        <StyledCard sx={{ maxWidth: 345 }}>
            <StyledCardHeader
                avatar={
                    <>
                        <Avatar sx={{ bgcolor: green[500], width: '56px', height: '56px' }} aria-label="recipe">
                        </Avatar>
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
                title={data.name}
                subheader={data.email}
            />
        </StyledCard>
    )
}

export default CardUsers
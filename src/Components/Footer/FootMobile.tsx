import * as React from 'react';
import { styled } from '@mui/material/styles';
import { CalendarIcon, DashBoardIcon, FolderIcon, GroupIcon } from '../Icon/Icon';
import image from "../../assets/Images/image.png";

const FooterContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    background: '#FFF',
    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset, 0px 6px 24px 0px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.05)',

    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}))

const IconContainer = styled('div')(() => ({
    display: 'flex',
    padding: '12px 24px',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',

    img: {
        height: '32px',
        width: '32px',
    }
}))


const FooterMobile: React.FC = () => {
    return (
        <FooterContainer>
            <IconContainer>
                <DashBoardIcon />
            </IconContainer>
            <IconContainer>
                <FolderIcon />
            </IconContainer>
            <IconContainer>
                <CalendarIcon />
            </IconContainer>
            <IconContainer>
                <GroupIcon />
            </IconContainer>
            <IconContainer>
                <img src={image} alt=""/>
            </IconContainer>
        </FooterContainer>
    )
}

export default FooterMobile
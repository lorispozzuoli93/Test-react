import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Button, Card, CardActions, CardHeader, IconButton } from '@mui/material';
import ToggleButtonHeader from './ToggleButtonHeader';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { RootState } from '../../App/store';
import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { inputValueName } from '../../App/inputSliceName';
import { inputValueEmail } from '../../App/inputSliceEmail';
import { green } from '@mui/material/colors';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import MobileMenu from '../NavBar/MobileMobile';

const HeaderContainer = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

const HeaderWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}))

const ButtonWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
}))

const StyledButton = styled(Button)(() => ({
    background: '#5D5FEF',
    height: '44px',
    color: 'white',
    textTransform: 'capitalize',
    borderRadius: '13px',
    fontSize: '16px',
    padding: '0px 20px',
}))

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

const UsersWrapper = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    gap: '16px',
    alignSelf: 'stretch',
}))

const CardUser = () => {
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
            />
        </StyledCard>
    )
};


const Header: React.FC = () => {
    const inputValueNameReading = useAppSelector((state: RootState) => state.inputValueName.value)
    const inputValueEmailReading = useAppSelector((state: RootState) => state.inputValueEmail.value)
    const dispatch = useAppDispatch()

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        onAddBtnClick();
    }

    const [newCard, setNewCard] = React.useState<any>([])

    const onAddBtnClick = () => {
        setNewCard(newCard.concat(<CardUser key={newCard.length} />))
    }

    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <h1>Users</h1>
                    <ButtonWrapper>
                        <StyledButton onClick={handleClickOpen}>+ Add New</StyledButton>
                        <StyledIconButton>
                            <MoreHorizIcon />
                        </StyledIconButton>
                    </ButtonWrapper>
                </HeaderWrapper>
                <React.Fragment>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Subscribe</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={inputValueNameReading}
                                onChange={event => dispatch(inputValueName(event.target.value))}
                            />
                        </DialogContent>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                                variant="standard"
                                value={inputValueEmailReading}
                                onChange={event => dispatch(inputValueEmail(event.target.value))}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Elimina</Button>
                            <Button onClick={handleClose}>Aggiungi</Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>
            </HeaderContainer>
            <ToggleButtonHeader />
            <MobileMenu />
            <h3>Online users</h3>
            <UsersWrapper>
                {newCard}
            </UsersWrapper>
        </>
    )
}

export default Header
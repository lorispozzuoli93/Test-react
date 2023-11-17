import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardUsers from './CardUsers';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, ToggleButton, ToggleButtonGroup, useMediaQuery, useTheme } from '@mui/material';
import { ArrowIcon } from '../Icon/Icon';
import ToggleButtonHeader from './ToggleButtonHeader';
import MobileMenu from '../NavBar/MobileMobile';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CardUsersOnline from './CardUsersOnline';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

type IProps = {
    data: any,
    handleData: any,
    addNewUser: any,
    setName: any,
    setEmail: any,
}

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

const ButtonWrapper = styled('div')(() => ({
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

const UsersWrapperOnline = styled('div')(() => ({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    overflow: 'auto',
    width: '100%',
}))

const UsersContainer = styled('div')(() => ({
    paddingTop: '20px',
    paddingBottom: '20px',
}))

const UsersHeader = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

const UsersTitle = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',

    h2: {
        fontSize: '20px',
    }
}))

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
    background: '#F7F9FC',
    borderRadius: '12px',
}))

const UsersCounter = styled('div')(() => ({
    height: '20px',
    padding: '2px 8px',
    background: '#E6E9F0',
    color: '#7A8194',
    borderRadius: '100px',
    fontSize: '11px',
    display: 'flex',
    alignItems: 'center',
}))

const UsersWrapper = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    gap: '16px',
    alignSelf: 'stretch',
}))

const ButtonWrapperUsers = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}))

const StyledIconButtonUsers = styled(IconButton)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',

    svg: {
        width: '32px',
        height: '32px',
        background: '#E6E9F0',
        color: '#7A8194',
        borderRadius: '100px',
        boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
    },

    span: {
        fontSize: '13px',
        color: '#4A4F5E',
    }
}))

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

const Users: React.FC<IProps> = ({ data, handleData, addNewUser, setName, setEmail }) => {
    const usersOnline = data?.filter((active: { status: string; }) => active.status === 'active')
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

    const [alignment, setAlignment] = React.useState<string | null>('left')

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    }

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
        setName('')
        setEmail('')
    }

    const handleClose = () => {
        setOpen(false)
    }

    const addUser = () => {
        setOpen(false)
        addNewUser()
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
                    <React.Fragment>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Aggiungi</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </DialogContent>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Elimina</Button>
                                <Button onClick={addUser}>Aggiungi</Button>
                            </DialogActions>
                        </Dialog>
                    </React.Fragment>
                </HeaderWrapper>
            </HeaderContainer>
            {isDesktop && (<ToggleButtonHeader handleData={handleData} />)}
            <MobileMenu />
            <h3>Online users</h3>
            <UsersWrapperOnline>
                {usersOnline?.map((data: any) => <CardUsersOnline data={data} />
                )}
            </UsersWrapperOnline>
            <UsersContainer>
                <UsersHeader>
                    <UsersTitle>
                        <h2>Users</h2>
                        <UsersCounter>
                            {data?.length}
                        </UsersCounter>
                    </UsersTitle>
                    <StyledToggleButtonGroup
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
                    </StyledToggleButtonGroup>
                </UsersHeader>
                <UsersWrapper>
                    {data?.map((data: any) => <CardUsers data={data} alignment={alignment} />
                    )}
                </UsersWrapper>
                <ButtonWrapperUsers>
                    <StyledIconButtonUsers>
                        <ArrowIcon />
                        <span>Load more</span>
                    </StyledIconButtonUsers>
                </ButtonWrapperUsers>
            </UsersContainer>
        </>
    )
}

export default Users
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import { CartIcon } from '../Icon/Icon';

type IProps = {
  inputHandler: any
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  padding: '60px 16px 16px 16px',
  boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.06)',

  [theme.breakpoints.up('sm')]: {
    padding: '16px 0 16px 0',
    boxShadow: 'none',
  },
}))

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: 0,
}))

const LogoWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  paddingTop: '10px',

  svg: {
    width: '40px',
    height: '40px',
  },

  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  boxShadow: '1px 1px 1px #7A8194',
  color: '#7A8194',
  background: 'white',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',

  p: {
    display: 'none',
  },

  [theme.breakpoints.up('sm')]: {
    width: '61ch',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    p: {
      display: 'unset',
      fontSize: '20px',
      marginLeft: '4px',
    },
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledIconButtonCommand = styled(IconButton)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('sm')]: {
    display: 'unset',
    padding: '0 12px',
    height: '32px',
    pointerEvents: 'none',
    right: 16,
    borderRadius: '8px',
    background: '#F2F4F8',
    boxShadow: '0px - 1px 0px 0px rgba(0, 0, 0, 0.08) inset',

    svg: {
      width: '16px',
      height: '16px',
    }
  },
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const StyledIconButton = styled(IconButton)(() => ({
  border: '1px solid #DEE2E8',
  height: '40px',
  borderRadius: '13px',
  fontSize: '16px',

  svg: {
    width: '20px',
    height: '20px',
    color: '#7A8194',
  }
}))

const NavBar: React.FC<IProps> = ({ inputHandler }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="small">
          <FilterAltIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton size="small">
          <CalendarMonthIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <StyledToolBar>
          <LogoWrapper>
            <CartIcon />
          </LogoWrapper>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={inputHandler}
            />
            <StyledIconButtonCommand>
              <KeyboardCommandKeyIcon children={'F'} />
              <p>F</p>
            </StyledIconButtonCommand>

          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { xs: 'none', md: '8px' } }}>
            <StyledIconButton>
              <FilterAltIcon />
              <p>Filters</p>
            </StyledIconButton>
            <StyledIconButton>
              <CalendarMonthIcon />
            </StyledIconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <StyledIconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <FormatAlignLeftIcon />
            </StyledIconButton>
          </Box>
        </StyledToolBar>
      </StyledAppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default NavBar
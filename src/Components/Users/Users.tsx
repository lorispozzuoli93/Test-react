import * as React from 'react';
import { styled } from '@mui/material/styles';
import ToggleButtonUsers from './ToggleButtonUsers';
import CardUsers from './CardUsers';
import { IconButton } from '@mui/material';
import { ArrowIcon } from '../Icon/Icon';

type IProps = {
    data: any
}

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

const ButtonWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}))

const StyledIconButton = styled(IconButton)(() => ({
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

const Users: React.FC<IProps> = (props) => {
    return (
        <UsersContainer>
            <UsersHeader>
                <UsersTitle>
                    <h2>Users</h2>
                    <UsersCounter>
                        {props.data.length}
                    </UsersCounter>
                </UsersTitle>
                <ToggleButtonUsers />
            </UsersHeader>
            <UsersWrapper>
                {props.data.map((data: any) =>
                    <CardUsers data={data} />
                )}
            </UsersWrapper>
            <ButtonWrapper>
                <StyledIconButton>
                    <ArrowIcon />
                    <span>Load more</span>
                </StyledIconButton>
            </ButtonWrapper>
        </UsersContainer>
    )
}

export default Users
import React from 'react'

import { connect } from 'react-redux'
import { setUsersActionCreator } from './state/users'

const Users = (props) => {
    if(props._users === null){
    fetch ('https://randomuser.me/api')
        .then(r => r.json())
        .then(data => {
            props._setUsers(data.results)
        })
    }

    return (
        < div >
            {
                
            }
        </div >
    )
}

const mapStateToProps = state => ({
    _users: state.users.users
})

const mapDispatchToProps = dispatch => ({
    _setUsers: (users) => dispatch(setUsersActionCreator(users))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)

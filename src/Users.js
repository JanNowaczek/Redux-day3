import React from 'react'

import { connect } from 'react-redux'
import { setUsersActionCreator } from './state/users'

const Users = (props) => {
    fetch ('https://randomuser.me/api')
        .then(r => r.json())
        .then(data => {
            props._setUsers(data.results)
        })

    return (
        < div >
            Users
        </div >
    )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    _setUsers: (users) => dispatch(setUsersActionCreator(users))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)

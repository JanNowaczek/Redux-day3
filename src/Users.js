import React from 'react'

import { connect } from 'react-redux'
import { setUsersActionCreator } from './state/users'

const Users = (props) => {
    props._setUsers('ala')

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

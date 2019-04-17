import React from 'react'

import { connect } from 'react-redux'
import { setUsersActionCreator } from './state/users'

const Users = (props) => {
    return (
        < div >
            {
                props._users &&
                props._users.map(
                    user => (
                        <div 
                        key={user.login.uuid}
                        >
                            {user.name.first}
                        </div>
                    )
                )
            }
        </div >
    )
}

const mapStateToProps = state => ({
    _users: state.users.users
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)

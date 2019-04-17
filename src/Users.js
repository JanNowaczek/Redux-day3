import React from 'react'

import { connect } from 'react-redux'
import { fetchUsersAsyncActionCreator } from './state/users'

const Users = (props) => {
    return (
        < div >
            <button
                onClick={
                    props._fetchUsers
                }
            >
                ZAŁADUJ
            </button>
            {
                props._isError ?
                    'Wystąpił błąd'
                    :
                    props._isLoading ?
                        'Ładuję...'
                        :
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
    _users: state.users.users,
    _isLoading: state.users.isLoading,
    _isError: state.users.isError,
})

const mapDispatchToProps = dispatch => ({
    _fetchUsers: () => dispatch(fetchUsersAsyncActionCreator(10))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)

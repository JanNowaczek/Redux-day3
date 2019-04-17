import React from 'react'

import { connect } from 'react-redux'
import { incAsyncActionCreator } from './state/counter'

const Counter = (props) => (
    props._number !== null ?
        <div>
            <h1>
                {props._number}
            </h1>
            <button
                onClick={props._inc}
            >
                +
        </button>
        </div>
        :
        'Ładowanie...'
)

const mapStateToProps = state => ({
    _number: state.counter.number,
})

const mapDispatchToProps = dispatch => ({
    _inc: () => dispatch(incAsyncActionCreator())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter)
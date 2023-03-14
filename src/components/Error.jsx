import React from 'react'

export const Error = ({error}) => {
    return (
        <div className="alert alert-danger text-center">Error: {error}</div>
    )
}

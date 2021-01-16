import React from 'react'
import './inputOption.css'

export default function InputOption({ Icon, title, color }) {
    return (
        <div className="inputOption">
            <Icon style={{color}} />
            <h4>{title}</h4>
        </div>
    )
}

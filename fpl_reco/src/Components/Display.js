import React, { useRef, useState, useEffect, Component } from 'react'
import './Display.css'

function Display(props) {

    const leStyle = {
        padding: '4pt'
    };

    return (
        <div >
            <table style={leStyle}>
                <thead>
                <th style={leStyle}>Player Name</th>
                <th style={leStyle}>Points Per Game</th>
                <th style={leStyle}>Position</th>
                </thead>
                <tbody>
                {props.array.map(item => (
                <tr >
                <td style={leStyle}>{item.name}</td>
                <td style={leStyle}>{item.points_per_game}</td>
                <td style={leStyle}>{item.position}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Display;
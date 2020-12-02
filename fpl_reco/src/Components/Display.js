import React, { useRef, useState, useEffect, Component } from 'react'
import './Display.css'

function Display(props) {

    const leStyle = {
        padding: '4pt'
    };

    if (props.full == 'False') {
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
    } else {
        return (            
        <div >
            <table style={leStyle}>
            <thead>
                <th style={leStyle}>Player Name</th>
                <th style={leStyle}>Points Per Game</th>
                <th style={leStyle}>Position</th>
                <th style={leStyle}>Cost</th>
                <th style={leStyle}>Status</th>
                <th style={leStyle}>Minutes</th>
                <th style={leStyle}>Total Points</th>
                <th style={leStyle}>Selected (%)</th>
                <th style={leStyle}>Goals</th>
                <th style={leStyle}>Assists</th>
                <th style={leStyle}>Creativity</th>
                </thead>
                <tbody>
                {props.array.map(item => (
                <tr >
                <td style={leStyle}>{item.name}</td>
                <td style={leStyle}>{item.points_per_game}</td>
                <td style={leStyle}>{item.position}</td>
                <td style={leStyle}>{item.cost}</td>
                <td style={leStyle}>{item.status}</td>
                <td style={leStyle}>{item.minutes}</td>
                <td style={leStyle}>{item.total_points}</td>
                <td style={leStyle}>{item.selected_by_percent}</td>
                <td style={leStyle}>{item.goals_scored}</td>
                <td style={leStyle}>{item.assists}</td>
                <td style={leStyle}>{item.creativity}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
        );
    }

}

export default Display;
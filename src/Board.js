import React from 'react'
import Square from './Square';

export default function Board() {
    return (
        <div className = "Board">
        <Square /><Square /><Square /><br />
        <Square /><Square /><Square /><br />
        <Square /><Square /><Square /><br />
        </div>
    );
}

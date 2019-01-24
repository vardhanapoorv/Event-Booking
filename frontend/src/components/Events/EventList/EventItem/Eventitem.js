import React from 'react';

import './EventItem.css';

const eventItem = props => (
    <li key={props.eventId} className="events__list-item">
        <div>
            <h1>{props.title}</h1>
            <h2>$19.99</h2>
        </div>
        <div>
            <button>View Details</button>
        </div>
    </li>
);

export default eventItem;
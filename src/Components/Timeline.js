import '../style/Timeline.css';
import TimelineItem from './TimelineItem';
import React, { Component } from 'react';

const Timeline = (props) => {
    return (
    props.timelineData.length > 0 && (
        <div className="timeline-container">
            {props.timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    ));
}

export default Timeline;

import { TimelineItem }  from 'vertical-timeline-component-for-react';
import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
  return (
    <TimelineItem
      dateText={props.time ? props.time : ""+(props.index+1)}
      style={{ color: getStyle(props.type) }}
      dateInnerStyle={{ background: getStyle(props.type), color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '5px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
    {props.time ? (
      <a style={{color:'inherit'}}  href={formatLink(props.time)}>{props.text}</a>
    ) : (
      <p>{props.text}</p>
    )}
    </TimelineItem>
);
};

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string,
  type: PropTypes.string.isRequired
};

const getStyle = (type) => {
  switch (type){
    case "problem": return '#D21F3C';
    case "warning": return '#FFBF00';
    default: return '#FFFFFF';
  }
}

const formatLink = (text) => {
    return "osu://edit/" + text;
}

export default Comment;

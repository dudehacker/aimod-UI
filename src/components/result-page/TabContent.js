import React from 'react';
import {Timeline} from 'vertical-timeline-component-for-react';
import Comment from './Comment'

function TabContent(props) {
      return (
        <Timeline lineColor={'#ddd'}>
        {
          props.data.comments.map(function (comment, index){
            return <Comment
              key={index}
              index={index}
              time={comment.time}
              text={comment.text}
              type={comment.type}
              />;
          })
        }
        </Timeline>
      );
}

export default TabContent;

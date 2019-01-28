import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Comment from './Comment'
import React, {Fragment} from 'react'
import {Timeline} from 'vertical-timeline-component-for-react';

const TabContainer = (props) => {
      return (
        <Fragment>
  <Tabs onSelect={tabSelected}>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <Timeline lineColor={'#ddd'}>
        <Comment id="1" time="00:00:230" text="inconsistent hitsound" type="warning"/>
        <Comment id="2" time="00:00:430" text="inconsistent hitsound" type="warning"/>
        <Comment id="3" time="00:00:670" text="muted hitsound" type="problem"/>
        <Comment id="4" time="00:00:930" text="inconsistent hitsound" type="warning"/>
      </Timeline>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>



</Fragment>

      );
}

const tabSelected = (index, lastIndex, event) => {
  console.log(index + " " + lastIndex);
}

export default TabContainer;

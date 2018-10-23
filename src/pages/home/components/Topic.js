import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem,
} from '../style';

class Topic extends Component {
  
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicItemList.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img
                  className='topic_pic'
                  alt={item.get('title')}
                  src={item.get('url')}
                />
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>

    )
  }

}

const mapState = (state) => ({
  topicItemList: state.getIn(['home', 'topicItemList'])
})

export default connect(mapState, null)(Topic);
import React, { Component } from 'react';

import {
  View,
  Button,
  Platform
} from 'react-native';

import { AppTourView } from 'react-native-app-tour';


class ShowButton extends Component {
  render() {
    return (
      <View
        style={{ alignItems: 'center', marginVertical: 40}} 
      	collapsable={false}
      	ref={(ref) => {
      		const props = Platform.select({
      			ios: {
      				primaryText: 'IOS',
      				secondaryText: 'Example text.',

      			},
      			android: {
      				title: 'Android',
      				description: 'Example text',
      				outerCircleColor: '#3f52ae'
      			}
      		});
      		if(this.props.addShowMark) {
      			this.props.addShowMark(AppTourView.for(
      				ref,
      				{ ...props }
      			));
      		}
      	}}>
      	<Button 
      		title='Button' 
      		onPress={e => null} />
      </View>
    );
  }
}

export default ShowButton;
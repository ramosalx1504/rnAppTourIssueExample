import React from 'react';
import { View, Text } from 'react-native';
import { AppTour, AppTourSequence, AppTourView } from 'react-native-app-tour';

import { ShowButton } from '../../components';

class WithoutPager extends React.Component {
	constructor(props){
		super(props);
		this.showTargets = [];
	}

	componentDidMount() {
		setTimeout(() => {
			let appTourSequence = new AppTourSequence();

			this.showTargets.forEach(appTourTarget => {
				appTourSequence.add(appTourTarget);
			});

			AppTour.ShowSequence(appTourSequence);
		}, 1500);
	}

	render(){
		return(
			<View style={{margin: 40}}>
				<Text>Not AndroidPager Example</Text>
				<Text>Work as expected.</Text>
				<ShowButton addShowMark={ t => this.showTargets.push(t) }/>
			</View>
		);
	}
}

export default WithoutPager;
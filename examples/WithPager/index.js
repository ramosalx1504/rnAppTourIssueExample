import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ViewPagerAndroid,
  Text
} from 'react-native';

import { AppTour, AppTourSequence, AppTourView } from 'react-native-app-tour';

import { ShowButton } from '../../components';


class index extends Component {
	constructor(props) {
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
		}, 3500);
	}
	render() {
		return (
			<ViewPagerAndroid
				style={styles.viewPager}
				initialPage={0}>
				<View style={styles.pageStyle} key="1">
					<Text>First page</Text>
					<Text>With AndroidPager Example</Text>
					<Text>Not work.</Text>
					<ShowButton addShowMark={ t => t && this.showTargets.push(t) }/>
				</View>
				<View style={styles.pageStyle} key="2">
					<Text>Second page</Text>
				</View>
			</ViewPagerAndroid>
		);
	}
}

const styles = StyleSheet.create({
	viewPager: {
		flex: 1
	},
	pageStyle: {
		alignItems: 'center',
		padding: 20,
	}
});


export default index;
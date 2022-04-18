import React from "react";
import MainAppBar from './mainmenu';

class GiveActivity extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch("http://www.boredapi.com/api/activity?type=social")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
            
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
	
		<div>	
		<MainAppBar />
			<h1> Here is an activity you can do together <p>-------------------------------------</p></h1> {
				Object.entries(items).slice(0,1).map((item) => (
				<h3 key = { item.id } >
					Activity: { items.activity }
					</h3>
				))
			}
			<h1><p>-------------------------------------</p>Refresh Page for a New Activity</h1> 
		</div>
	);
}
}

export default GiveActivity;
import React, {
	PureComponent,
	createRef
} from 'react';


class Map extends PureComponent {
	constructor(props) {
		super(props);

		this.ref = createRef();
	}

	componentDidMount() {
		const { options, mapRef } = this.props;

		this.map = new google.maps.Map(this.ref.current, options);

		if (mapRef) {
			mapRef.current = this.map;
		}
	}

	render() {
		const { height, children } = this.props;

		return (
			<div ref={this.ref} style={{ height }}>
				{children}
			</div>
		);
	}
}

export default Map;

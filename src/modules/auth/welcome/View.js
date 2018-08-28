import React, { Component } from 'react';
import { Container, Content, Text, View } from 'native-base';



class Welcome extends Component {

	state = {
	    loading: false
	};

	handleLoading = () => {
        this.setState(previousState => {
            return { verifying: !previousState.verifying };
        });
    }

	render() {
		return (
			<Container>
				<Content padder>
					<View>
						<Text>Welcome</Text>
		            </View>
				</Content>
			</Container>
		);
	}
}

const styles = {

	
}

export default Welcome;
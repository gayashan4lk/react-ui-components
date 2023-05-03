import Button from '../components/Button';
import Alert from '../components/Alert';
import Content from '../components/Content';

const Home = () => {
	return (
		<>
			<div>
				<Button>Button</Button>
			</div>
			<div>
				<Alert varient='danger'>Beware of Dogs</Alert>
			</div>
			<div>
				<Content
					title='Test title'
					content='Test content'
					image='https://picsum.photos/200'
					imageAlt='test-image'
					reverse={true}
				/>
			</div>
		</>
	);
};

export default Home;

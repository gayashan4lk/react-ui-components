import styles from './Alert.module.scss';

type AlertProps = {
	children?: React.ReactNode;
	varient?: 'primary' | 'danger';
};

export default function Alert({ children, varient = 'primary' }: AlertProps) {
	const varientClass = `alert-${varient}`;
	return (
		<div className={`${styles.alert} ${styles[varientClass]}`}>{children}</div>
	);
}

import styles from './Content.module.scss';

type ContentProps = {
	title?: string;
	content?: string;
	image?: string;
	imageAlt?: string;
	reverse?: boolean;
};

export default function Content({
	title,
	content,
	image,
	imageAlt,
	reverse = false,
}: ContentProps) {
	let rowReverse = reverse ? `${styles['row-reverse']}` : '';

	return (
		<div className={`${styles.content} ${rowReverse}`}>
			<img src={image} alt={imageAlt} />
			<div>
				<h4 className={styles.title}>{title}</h4>
				<p>{content}</p>
			</div>
		</div>
	);
}

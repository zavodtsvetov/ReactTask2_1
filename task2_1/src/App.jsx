import { useState } from 'react';
import styles from './App.module.css';

function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueValid, setIsValueValid] = useState(false);
	const errorText = 'Введенное значение должно содержать минимум 3 символа';

	const onInputButtonCLick = () => {
		const promptValue = prompt('Введите значение:');
		if (promptValue.length >= 3) {
			setValue(promptValue);
			setIsValueValid(true);
		} else {
			setError(errorText);
			setIsValueValid(false);
		}
	};
	const onAddButtonClick = () => {
		if (value) {
			const updatedList = [...list, { id: Date.now(), value: value }];
			setList(updatedList);
			console.log(updatedList);
			setIsValueValid(false);
			setValue('');
			setError('');
		}
	};
	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "<output className={styles['current-value']}>{value}</output>"
			</p>
			{error !== '' ? <div className={styles.error}>{errorText}</div> : ''}
			<div className={styles['buttons-container']}>
				<button onClick={onInputButtonCLick} className={styles.button}>
					Ввести новое
				</button>
				<button onClick={onAddButtonClick} className={styles.button} disabled={!isValueValid}>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length < 1 ? (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				) : (
					<ul className={styles.list}>
						{' '}
						{list.map(({ id, value }) => (
							<li key={id} className={styles['list-item']}>
								{value}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default App;

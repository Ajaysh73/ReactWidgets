import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);
	const onTitleClick = (index) => {
		setActiveIndex(index);
	};
	const renderedItems = items.map((item, index) => {
		const active = index === activeIndex ? 'active' : '';
		return (
			<React.Fragment key={item.title}>
				<div onClick={() => onTitleClick(index)} className={`title ${active}`}>
					<i className='dropdown icon'></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});
	return (
		<div>
			<div className='ui styled accordion'>{renderedItems}</div>
			<h3>
				This part of application uses React hooks and create a custom accordion
				component.
			</h3>
		</div>
	);
};

export default Accordion;

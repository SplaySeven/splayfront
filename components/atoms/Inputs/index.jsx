import React from 'react';

const Input = ({ style, error, name, ...props }) => {
	return (
		<label className="inputContainer">
			{name && <span>{name}</span>}
			<input className={error === true ? 'errorInput' : ''} {...props} />
		</label>
	);
};

export default Input;

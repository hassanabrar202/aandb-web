import React from 'react';

 const GInput = ({
																								label,
																								placeholder,
																								classname,
																								type = 'text',
																								showLogo = false,
																								logo,
																							}) => {
	return (
		<div className={classname}>
			<label className="text-base md:text-lg" htmlFor={label}>
				{label}
			</label>
			<div className="relative">
				<input
					type={type}
					placeholder={placeholder}
					className="mt-4 text-base md:text-lg w-full bg-input-background text-foundation-dark-dark outline-0 p-3"
				/>
				{showLogo && logo && (
					<div className="absolute inset-y-0 right-0 flex items-center pr-3">
						{logo}
					</div>
				)}
			</div>
		</div>
	);
};

export default GInput

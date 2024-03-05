export const GButton = ({
	classname,
	name,
	onClick,
}) => {
	return (
		<div className={classname}>
			<button
				onClick={onClick}
				className="text-lg w-full bg-brand-light-blue text-white font-bold py-2 md:p-3 rounded-md"
			>
				{name}
			</button>
		</div>
	)
}

export const GOutlineButton = ({
	classname,
	name,
	onClick,
	icon: Icon,
	buttonClassName
}) => {
	return (
		<div className={classname}>
			<button
				onClick={onClick}
				className={`flex items-center gap-x-2 text-sm md:text-lg w-full bg-white text-brand-light-blue border md:px-4 px-2 md:py-2 ${buttonClassName}`}
			>
				{Icon && <Icon className="w-5 h-5" />}
				<span className="block w-full text-center">{name}</span>
			</button>
		</div>
	)
}

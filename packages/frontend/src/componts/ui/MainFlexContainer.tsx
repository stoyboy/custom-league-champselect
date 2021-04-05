import * as React from "react"

export interface MainFlexContainerProps {
    children?: React.ReactNode
}

export function MainFlexContainer(props: MainFlexContainerProps) {
	return (
		<div
			style={{
				position: "absolute",
				bottom: 80,
				width: "100%"
			}}
		>
			<div
				style={{
					display: "grid",
					placeItems: "center"
				}}
			>
				<div 
					style={{
						display: "flex",
						justifyContent: "space-evenly",
						backgroundColor: "#000423",
						maxWidth: 1700
					}}
				>
					{props.children}
				</div>
			</div>
		</div>
	)
}
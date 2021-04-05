import * as React from "react"

export interface SelectionComponentProps {
    name: string
    image: string
	display?: boolean
}

export function SelectionComponent(props: SelectionComponentProps) {
	return (
		<div
			style={{
				
				display: props.display ? "none" : undefined
			}}
		>
			<img 
				src={props.image}
				style={{
					width: "100%",
					overflow: "hidden",
					height: 200,
					objectFit: "cover"
				}}
			/>
			<div
				style={{
					color: "white",
					textAlign: "center",
					marginTop: 0,
					paddingTop: 10,
					paddingBottom: 10
				}}
			>
				{props.name}
			</div>
		</div>
	)
}
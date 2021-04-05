import * as React from "react"

export interface SelectionFieldProps {
    children?: React.ReactNode
}

export function SelectionField(props: SelectionFieldProps) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-evenly",
				alignItems: "center",
				width: 810
			}}
		>
			{props.children}
		</div>
	)
} 
import * as React from "react"

export function TeamSeperator() {
	return (
		<div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					backgroundColor: "#04eae2",
					height: "100%"
				}}
			>
				<div>Playoffs</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
						color: "white"
					}}
				>
					<div>0</div>
					<div>-</div>
					<div>0</div>
				</div>
			</div>
		</div>
	)
}
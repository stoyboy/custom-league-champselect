import * as React from "react"
import { MainFlexContainer } from "./ui/MainFlexContainer"
import { SelectionComponent } from "./ui/SelectionComponent"
import { SelectionField } from "./ui/SelectionField"
import { TeamSeperator } from "./ui/TeamSeperator"

export function Overlay() {
	return (
		<MainFlexContainer>

			{/* LEFT TEAM */}
			<SelectionField>
				<SelectionComponent 
					name="ANNIE"
					image={`${"annie"}.png`}
					display={true}
				/>
				<SelectionComponent 
					name="ANNIE"
					image={`${"annie"}.png`}
					display={true}
				/>
				<SelectionComponent 
					name="ANNIE"
					image={`${"annie"}.png`}
					display={true}
				/>
				<SelectionComponent 
					name="ANNIE"
					image={`${"annie"}.png`}
					display={true}
				/>
				<SelectionComponent 
					name="ANNIE"
					image={`${"annie"}.png`}
					display={false}
				/>
			</SelectionField>

			<TeamSeperator />

			{/* RIGHT TEAM */}
			<SelectionField>
				<SelectionComponent 
					name="ANNIE"
					image={`${"annie"}.png`}
				/>
				<SelectionComponent 
					name="ANNIE"
					image={`${"annie"}.png`}
				/>
				<SelectionComponent 
					name="ANNIE"
					image={`${"annie"}.png`}
				/>
				<SelectionComponent 
					name="ANNIE"
					image={`${"annie"}.png`}
				/>
				<SelectionComponent 
					name="ANNIE"
					image={`${"annie"}.png`}
				/>
			</SelectionField>

		</MainFlexContainer>
	)
}
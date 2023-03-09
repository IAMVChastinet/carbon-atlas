import React from 'react'

function RangeDatePicker() {
	return (
		<bx-date-picker>
			<bx-date-picker-input
				kind="from"
				label-text="Deadline"
				placeholder="mm/dd/yyyy"
				size="lg"
			>
			</bx-date-picker-input>
			<bx-date-picker-input
				kind="to"
				label-text="."
				placeholder="mm/dd/yyyy"
				size="lg"
			>
			</bx-date-picker-input>
		</bx-date-picker>
	)
}

export default RangeDatePicker

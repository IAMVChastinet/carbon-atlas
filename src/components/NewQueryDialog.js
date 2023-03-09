import React, { useState } from 'react'
import RangeDatePicker from './RangeDatePicker';

function NewQueryDialog({ slot, setToggleModal }) {
	const [openTime, setOpenTime] = useState(false)
	const [openTimezone, setOpenTimezone] = useState(false)

	return (
		<atlas-dialog slot={slot} open blade>
			<h2 slot="title">Create a new Query</h2>
			<atlas-button onClick={() => setToggleModal(null)} kind="icon" slot="dismissible">
				<atlas-icon name="close"></atlas-icon>
			</atlas-button>
			<form className="atlas-form">
				<atlas-input-text required>
					<span slot="label">Full Name</span>
				</atlas-input-text>

				<atlas-input-text required>
					<span slot="label">Job Title</span>
				</atlas-input-text>

				<atlas-input-text required>
					<span slot="label">Media/News Outlet</span>
				</atlas-input-text>

				<atlas-input-text>
					<span slot="label">Geography</span>
				</atlas-input-text>


				<atlas-input-text>
					<span slot="label">Email address</span>
					<p slot="helperText">Preferred email address you’d like to receive the response to</p>
				</atlas-input-text>

				<atlas-checkbox>
					<span slot="label">Remain anonymous 🛈</span>
				</atlas-checkbox>

				<atlas-input-text class="colspan" required>
					<span slot="label">Query Title</span>
				</atlas-input-text>

				<atlas-input-textarea class="colspan" placeholder="Enter details about your query" required>
					<span slot="label">Query Description</span>
				</atlas-input-textarea>

				<div className="colspan">
					<RangeDatePicker />

					<atlas-dropdown open={openTime} >
						<atlas-input-text readonly slot="input">
							<span slot="label">Time</span>
							<atlas-button slot="suffix" kind="icon" onClick={() => setOpenTime(!openTime)}>
								<atlas-icon name="arrowheadDownward"></atlas-icon>
							</atlas-button>
						</atlas-input-text>

						<ul slot="menu">
							<li>🕧🕧 🕧 🕧 </li>
							<li>🕧🕧 🕧 🕧 </li>
							<li>🕧🕧 🕧 🕧 </li>
							<li>🕧🕧 🕧 🕧 </li>
						</ul>
					</atlas-dropdown>

					<atlas-dropdown open={openTimezone} >
						<atlas-input-text readonly slot="input">
							<span slot="label">Timezone</span>
							<atlas-button slot="suffix" kind="icon" onClick={() => setOpenTimezone(!openTimezone)}>
								<atlas-icon name="arrowheadDownward"></atlas-icon>
							</atlas-button>
						</atlas-input-text>

						<ul slot="menu">
							<li>Brasília time</li>
							<li>Central Time zone</li>
							<li>Eastern Time zone</li>
						</ul>
					</atlas-dropdown>
				</div>

				<atlas-input-chip-group class="colspan">
					<span slot="label">Select topics that relate to this query</span>
					<atlas-chip-group category="topics">
						<atlas-chip>
							Business
							<atlas-button kind="icon" slot="dismisser">
								<atlas-icon name="close" />
							</atlas-button>
						</atlas-chip>

						<atlas-chip>
							Environment
							<atlas-button kind="icon" slot="dismisser">
								<atlas-icon name="close" />
							</atlas-button>
						</atlas-chip>
					</atlas-chip-group>
				</atlas-input-chip-group>

			</form>
			<atlas-button-set slot="footer">
				<atlas-button>Submit</atlas-button>
			</atlas-button-set>
		</atlas-dialog>
	)
}

export default NewQueryDialog

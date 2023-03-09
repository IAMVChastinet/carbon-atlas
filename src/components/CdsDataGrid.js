import React from 'react'

function CdsDataGrid({ slot }) {
	return (
		<bx-ce-demo-data-table slot={slot} page-size="5" start="0" color-scheme="null" size="">
			<bx-table-toolbar role="section">
				<bx-table-toolbar-content tabindex="">
					<bx-table-toolbar-search role="search" color-scheme="" size="sm"></bx-table-toolbar-search>
					<bx-overflow-menu role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" color-scheme="" size="">
						<atlas-icon slot="icon" name="settings" />

						<bx-overflow-menu-body role="menu" tabindex="-1" color-scheme="">
							<bx-overflow-menu-item role="menuitem"> Action 1 </bx-overflow-menu-item>
							<bx-overflow-menu-item role="menuitem"> Action 2 </bx-overflow-menu-item>
							<bx-overflow-menu-item role="menuitem"> Action 3 </bx-overflow-menu-item>
						</bx-overflow-menu-body>
					</bx-overflow-menu>
					<bx-btn icon-layout="" kind="primary" size="">I do nothing</bx-btn>
				</bx-table-toolbar-content>
			</bx-table-toolbar>

			<bx-table size="" role="table">
				<bx-table-head role="rowgroup">
					<bx-table-header-row role="row" size="">

						<bx-table-header-cell sort-cycle="bi-states-from-ascending" sort-direction="ascending" data-column-id="name" role="columnheader">
							Name
						</bx-table-header-cell>

						<bx-table-header-cell data-column-id="protocol" role="columnheader">
							Protocol
						</bx-table-header-cell>

						<bx-table-header-cell sort-cycle="tri-states-from-ascending" sort-direction="none" data-column-id="port" role="columnheader">
							Port
						</bx-table-header-cell>

						<bx-table-header-cell data-column-id="rule" role="columnheader">
							Rule
						</bx-table-header-cell>

						<bx-table-header-cell data-column-id="attachedGroups" role="columnheader">
							Attached Groups
						</bx-table-header-cell>

						<bx-table-header-cell data-column-id="status" role="columnheader">
							Status
						</bx-table-header-cell>

					</bx-table-header-row>
				</bx-table-head>
				<bx-table-body color-scheme="null" role="rowgroup">

					<bx-table-row data-row-id="0" role="row" size="">
						<bx-table-cell role="cell">Load Balancer 001</bx-table-cell>  <bx-table-cell role="cell">HTTP</bx-table-cell>  <bx-table-cell role="cell">80</bx-table-cell>  <bx-table-cell role="cell">Round Robin</bx-table-cell>  <bx-table-cell role="cell">Maureen's VM Groups</bx-table-cell>  <bx-table-cell role="cell">Active</bx-table-cell>
					</bx-table-row>

					<bx-table-row data-row-id="1" role="row" size="">
						<bx-table-cell role="cell">Load Balancer 002</bx-table-cell>  <bx-table-cell role="cell">HTTPS</bx-table-cell>  <bx-table-cell role="cell">443</bx-table-cell>  <bx-table-cell role="cell">Round Robin</bx-table-cell>  <bx-table-cell role="cell">Maureen's VM Groups</bx-table-cell>  <bx-table-cell role="cell">Active</bx-table-cell>
					</bx-table-row>

					<bx-table-row data-row-id="2" role="row" size="">
						<bx-table-cell role="cell">Load Balancer 003</bx-table-cell>  <bx-table-cell role="cell">HTTP</bx-table-cell>  <bx-table-cell role="cell">80</bx-table-cell>  <bx-table-cell role="cell">Round Robin</bx-table-cell>  <bx-table-cell role="cell">Maureen's VM Groups</bx-table-cell>  <bx-table-cell role="cell">Active</bx-table-cell>
					</bx-table-row>

					<bx-table-row data-row-id="3" role="row" size="">
						<bx-table-cell role="cell">Load Balancer 004</bx-table-cell>  <bx-table-cell role="cell">HTTP</bx-table-cell>  <bx-table-cell role="cell">80</bx-table-cell>  <bx-table-cell role="cell">Round Robin</bx-table-cell>  <bx-table-cell role="cell">Maureen's VM Groups</bx-table-cell>  <bx-table-cell role="cell">Active</bx-table-cell>
					</bx-table-row>

					<bx-table-row data-row-id="4" role="row" size="">
						<bx-table-cell role="cell">Load Balancer 005</bx-table-cell>  <bx-table-cell role="cell">HTTPS</bx-table-cell>  <bx-table-cell role="cell">443</bx-table-cell>  <bx-table-cell role="cell">Round Robin</bx-table-cell>  <bx-table-cell role="cell">Maureen's VM Groups</bx-table-cell>  <bx-table-cell role="cell">Active</bx-table-cell>
					</bx-table-row>

				</bx-table-body>
			</bx-table>

			<bx-pagination page-size="5" start="0" total="150">
				<bx-page-sizes-select slot="page-sizes-select">
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="15">15</option>
				</bx-page-sizes-select>
				<bx-pages-select></bx-pages-select>
			</bx-pagination>
		</bx-ce-demo-data-table>
	)
}

export default CdsDataGrid

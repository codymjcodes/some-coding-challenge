import React, { useContext } from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

import { MovieContext } from '../context/context'

interface ChildrenProps {
	match: any
}
const LocationsPage: React.FC<ChildrenProps> = ({ match }) => {
	const { state } = useContext(MovieContext)

	const {
		params: { pageId },
	} = match

	/* I would've done this w/o touching the DOM if I had a data structure with a complete (bool) property on each location but this does the job in this case */
	const markOffLocation = (ev: any) => {
		ev.currentTarget.classList.toggle('complete')
	}

	return (
		<Layout>
			<div className="locations-page">
				<button className="arrow left-arrow left-arrow-position">
					<Link to="/">&larr; back to home</Link>
				</button>
				<div className="locations-page__main">
					<h2 className="locations-page__title detail-highlight">
						Movie Location List
					</h2>
					<p className="locations-page__tag">
						Check off each location you've visited
					</p>
					{state.length ? (
						<div className="locations-page__list">
							<ul>
								{state[pageId].locations.map((loc: any, index: number) => (
									<li
										className="locations-page__item"
										key={index}
										onClick={e => markOffLocation(e)}
									>
										<div>
											<p>{loc}</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					) : (
						'Loading'
					)}
				</div>
			</div>
		</Layout>
	)
}
// export interface LocationItemProps {
//     complete?: boolean,
//     location: string,
// }

// const LocationItem: React.FC<LocationItemProps> = ({ location, complete}) => {

//     return(
//         <li data-complete={complete}>
//             <div></div>
//             <p>{location}</p>
//         </li>
//     )
// }

export default LocationsPage

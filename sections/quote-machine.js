import {useState} from 'react'
import cx from 'classnames'
import layout from 'styles/layout.module.scss'
import global from 'styles/global.module.scss'
import { InfoForm, Pages, BasicNeeds, BackEndNeeds, PriceBox, Button } from 'components/router.js';

export default () => {

	const [info, setInfo] = useState({
		pages: {
			siteType: "",
			subtotal: 0,
			design: 0,
			pages: 0,
		},
		basicNeeds: {
			option1: false,
			option2: false,
			option3: false,
			option4: false,
			option5: false,
			option6: false,
			option7: false,
			option8: false,
			option9: false,
			option10: false,
			option11: false,
			option12: false,
			subtotal: 0,
		},
		backEndNeeds: {
			option1: false,
			sudo1: {
				options: [false, false, false, false],
				subtotal: 0
			},
			option2: false,
			sudo2: {
				options: [false, false, false],
				subtotal: 0
			},
			option3: false,
			sudo3: {
				options: [false, false, false, false],
				subtotal: 0
			},
			subtotal: 0,
			message: "",
		},
		infoForm: {
			name: "",
			email: "",
			phone: "",
			message: "",
		}
	});
	const [spot, setSpot] = useState(0);
	const [definition, setDef] = useState("");

	const next = () => {
		if (spot < 3) {
			setSpot(spot + 1);
			setDef("");
		}
	}

	const prev = () => {
		if (spot > 0) {
			setSpot(spot - 1);
			setDef("");
		}
	}

	const changeInfo = (newInfo, el, def) => {
		let updatedInfo = { ...info }
		updatedInfo[el] = { ...newInfo }
		setInfo(updatedInfo);
		setDef(def)
	}

	const submitForm = () => {
		window.open("/thanks", "_self");
	}

	let cards = [
		<Pages value={info.pages} update={changeInfo} />,
		<BasicNeeds value={info.basicNeeds} update={changeInfo} />,
		<BackEndNeeds value={info.backEndNeeds} update={changeInfo} />,
		<InfoForm value={info.infoForm} update={changeInfo} submitForm={submitForm} />
	]

	return (
    <div className={cx(layout.container, global.card, layout.f_row, layout.f_wrap, layout.justify_center, layout.align_center)}>
			<div className={cx(layout.col_10_mob, layout.col_7)}>
				<div>
					<h4>
						Step {spot + 1} of {cards.length}
					</h4>
				</div>
				{cards[spot]}
				<div>
					{definition}
				</div>
				<div className={cx(layout.f_col, layout.f_wrap, layout.justify_center, layout.align_around)}>
					{spot !== 0 && <Button simple onClick={prev}>Previous</Button>}
					{spot !== cards.length - 1 && <Button onClick={next}>Next</Button> }
				</div>
			</div>
			<div className={cx(layout.col_10_mob, layout.col_3)}>
				<PriceBox pages={info.pages.subtotal} design={info.basicNeeds.subtotal} programming={info.backEndNeeds.subtotal} />
			</div>
		</div>
	);
}

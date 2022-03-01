import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Round1 from "./Round1";
import Round2 from "./Round2";
import RoundPicker from "./RoundPicker";

const Presale = () => {
	const [round, setRound] = useState(1);

	return (
		<div className="z-10">
			<RoundPicker round={round} setRound={setRound} />
			<AnimatePresence>{round === 1 && <Round1 />}</AnimatePresence>
			<AnimatePresence>{round === 2 && <Round2 />}</AnimatePresence>
		</div>
	);
};

export default Presale;

import styled from "styled-components";
/* import { colors } from "./colors"; */
import { fonts } from "../assets/fonts/fonts";

export const StyledSchedule = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 15px 0;
	background-color: rgba(255, 255, 255, 0.7);
	h2,
	p {
		font-family: ${fonts.primary};
		font-weight: bold;
		margin: 0 0 0 0;
	}
	h2 {
		font-size: 28px;
	}
	p {
		font-size: 16px;
	}

	@media screen and (max-width: 768px) {
		h2 {
			font-size: 25px;
		}
		p {
			font-size: 14px;
		}
	}

	@media screen and (max-width: 550px) {
		gap: 3px;
		position: initial;
		/* padding: 6% 0px; */
		h2 {
			font-size: 18px;
		}
		p {
			font-size: 12px;
		}
	}
`;

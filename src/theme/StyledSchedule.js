import styled from "styled-components";
/* import { colors } from "./colors"; */
import { fonts } from "../assets/fonts/fonts";

export const StyledSchedule = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h2,
	p {
		font-family: ${fonts.secondary};
		font-weight: bold;
	}
	h2 {
		font-size: 35px;
	}
	/* p {
		font-size: 21px;
	} */
`;

import styled from "styled-components";
import { colors } from "../theme/colors";
import { fonts } from "../assets/fonts/fonts";

export const StyledFooter = styled.footer`
	background-color: ${colors.background};
	padding: 20px 0;
	margin-top: 20px;
	p {
		text-align: center;
		font-size: 13px;
		font-family: ${fonts.primary};
		margin: 0;
		color: ${colors.lightText};
	}

	@media screen and (max-width: 768px) {
		p {
			font-size: 10px;
		}
	}

	@media screen and (max-width: 550px) {
		p {
			font-size: 9px;
		}
	}
`;

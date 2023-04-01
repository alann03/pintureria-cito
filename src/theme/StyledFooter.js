import styled from "styled-components";
import { colors } from "../theme/colors";
import { fonts } from "../assets/fonts/fonts";

export const StyledFooter = styled.footer`
	background-color: ${colors.background};
	padding: 20px 0;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	.copyright {
		text-align: center;
		font-size: 13px;
		font-family: ${fonts.primary};
		margin: 0;
		color: ${colors.lightText};
	}
	div {
		opacity: 0.4;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
		.designedBy {
			font-family: ${fonts.primary};
			color: ${colors.lightText};
			font-size: 12px;
			margin: 0 0 0 0;
			img {
				width: 13px;
				margin-right: 2px;
			}
		}
		.name {
			font-style: italic;
		}
		a {
			text-decoration: none;
		}
	}

	@media screen and (max-width: 768px) {
		.copyright {
			font-size: 11px;
		}
		div {
			.designedBy {
				font-size: 10px;
				img {
					width: 11px;
				}
			}
		}
	}

	@media screen and (max-width: 550px) {
		.copyright {
			font-size: 10px;
		}
		div {
			.designedBy {
				font-size: 9px;
				img {
					width: 10px;
				}
			}
		}
	}
`;

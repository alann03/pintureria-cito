import styled from "styled-components";
import { colors } from "../theme/colors";
import { fonts } from "../assets/fonts/fonts";

export const StyledShipping = styled.div`
	background-color: ${colors.background};
	padding: 30px 0;
	.title {
		color: ${colors.lightText};
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		font-family: ${fonts.primary};
		gap: 10px;
		margin: 0 0 10px 0;
		img {
			width: 45px;
		}
	}
	.locations {
		color: ${colors.lightText};
		font-family: ${fonts.primary};
		font-size: 17px;
		text-align: center;
		margin: 0 0 0 0;
	}

	@media screen and (max-width: 768px) {
		padding: 25px 0;
		.title {
			font-size: 16px;
			img {
				width: 40px;
			}
		}
		.locations {
			font-size: 14px;
		}
	}

	@media screen and (max-width: 550px) {
		padding: 22px 0;
		.title {
			font-size: 13px;
			img {
				width: 35px;
			}
		}
		.locations {
			font-size: 12px;
		}
	}
`;

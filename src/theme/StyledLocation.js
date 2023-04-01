import styled from "styled-components";
import { colors } from "./colors";
import { fonts } from "../assets/fonts/fonts";

export const StyledLocation = styled.div`
	background-color: ${colors.lightBackground};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0;
	h2 {
		color: ${colors.text};
		font-size: 30px;
		font-family: ${fonts.primary};
		font-weight: 400;
		margin: 0;
	}
	.adress {
		color: ${colors.text};
		display: flex;
		align-items: center;
		font-size: 17px;
		font-family: ${fonts.primary};
		gap: 4px;
		margin: 20px 0 0 0;
	}
	.locationSVG {
		width: 20px;
	}
	.imageContainer {
		width: 70vw;
		overflow: hidden;
		margin: 30px 0;
		display: flex;
		justify-content: center;
		filter: drop-shadow(rgba(0, 0, 0, 0.4) 2px 2px 5px);
		a {
			width: 80%;
			:hover {
				transform: scale(1.1);
				transition: 1s;
			}
		}
		.locationIMG {
			width: 100%;
		}
	}
	.scheduleContainer {
		background-color: ${colors.background};
		border-radius: 20px;
		text-align: center;
		padding: 20px;
		h4,
		.schedule {
			color: ${colors.lightText};
			font-family: ${fonts.primary};
			width: 100%;
			margin: 0;
		}
		h4 {
			font-size: 17px;
			font-weight: 400;
			margin-bottom: 8%;
		}
		.schedule {
			display: flex;
			justify-content: space-between;
			gap: 35px;
			margin-top: 5px;
		}
	}

	@media screen and (max-width: 1000px) {
		.imageContainer {
			width: 80vw;
		}
	}

	@media screen and (max-width: 768px) {
		h2 {
			font-size: 25px;
		}
		.adress {
			font-size: 14px;
		}
		.scheduleContainer {
			h4 {
				font-size: 15px;
			}
			span {
				font-size: 14px;
			}
		}
	}

	@media screen and (max-width: 550px) {
		h2 {
			font-size: 20px;
		}
		.adress {
			font-size: 12px;
		}
		.locationSVG {
			width: 16px;
		}
		.scheduleContainer {
			h4 {
				font-size: 13px;
			}
			span {
				font-size: 12px;
			}
		}
		.imageContainer {
			width: 100vw;
		}
	}
`;

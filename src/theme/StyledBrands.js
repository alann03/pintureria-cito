import styled from "styled-components";
import { colors } from "./colors";
import { fonts } from "../assets/fonts/fonts";

export const StyledBrands = styled.div`
	background-color: ${colors.background};
	padding: 5% 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.sectionTitle {
		font-family: ${fonts.primary};
		font-size: 30px;
		font-weight: 400;
		color: ${colors.lightText};
		margin: 0 0 2% 0;
	}
	.carousel {
		width: 80vw;
	}
	.react-multi-carousel-item {
		display: flex;
		justify-content: center;
	}
	.imageContainer {
		width: 100px;
		height: 100px;
		background-color: white;
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 3%;
		border-radius: 10px;
		overflow: hidden;
	}
	img {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		.sectionTitle {
			font-size: 25px;
			margin: 0 0 5% 0;
		}
		.imageContainer {
			width: 80px;
			height: 80px;
		}
	}

	@media screen and (max-width: 550px) {
		flex: 1;
		.imageContainer {
			width: 58px;
			height: 58px;
		}
		.sectionTitle {
			font-size: 20px;
			margin: 0 0 8% 0;
		}
	}
`;

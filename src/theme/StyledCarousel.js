import styled from "styled-components";
/* import { colors } from "./colors"; */

export const StyledCarousel = styled.div`
	height: 70vh;
	flex: 1;
	.carousel {
		height: 100%;
		.react-multi-carousel-dot-list {
			margin-bottom: 1%;
			opacity: 0.9;
		}
		.react-multiple-carousel__arrow--right {
			right: calc(2% + 1px);
			z-index: 900;
		}
		.react-multiple-carousel__arrow--left {
			left: calc(2% + 1px);
			z-index: 900;
		}
	}
	img {
		width: 100vw;
		height: 95vh;
	}

	@media screen and (max-width: 550px) {
		height: 50vh;
		flex: none;
		img {
			height: 50vh;
		}
	}
`;

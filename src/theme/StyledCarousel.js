import styled from "styled-components";
/* import { colors } from "./colors"; */

export const StyledCarousel = styled.div`
	.carousel {
		height: 70vh;
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
		margin-top: 7%;
	}

	@media screen and (max-width: 500px) {
		.carousel {
			width: 100vw;
			height: 50vh;
		}
		img {
			height: 50vh;
			margin-top: 0;
		}
	}
`;

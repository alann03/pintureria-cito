import styled from "styled-components";

export const StyledWhatsapp = styled.div`
	display: flex;
	bottom: 15px;
	right: 15px;
	position: fixed;
	z-index: 999;
	:hover {
		transform: scale(1.1);
		transition: 0.7s;
	}
	img {
		width: 50px;
		height: 50px;
	}

	@media screen and (max-width: 768px) {
		img {
			width: 40px;
			height: 40px;
		}
	}

	@media screen and (max-width: 768px) {
		bottom: 5px;
		right: 5px;
		img {
			width: 35px;
			height: 35px;
		}
	}
`;

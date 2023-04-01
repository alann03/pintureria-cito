import styled from "styled-components";

export const StyledWhatsapp = styled.div`
	display: flex;
	bottom: 15px;
	right: 15px;
	position: fixed;
	z-index: 500;
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

	@media screen and (max-width: 550px) {
		bottom: 8px;
		right: 8px;
	}
`;

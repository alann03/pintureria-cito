import styled from "styled-components";
import { colors } from "../theme/colors";
import { fonts } from "../assets/fonts/fonts";

export const StyledContact = styled.div`
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
	.socialNetworksContainer {
		display: flex;
		justify-content: center;
		gap: 40px;
		margin: 20px 0 15px 0;
		.socialNetwork {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			color: ${colors.text};
			font-size: 16px;
			font-family: ${fonts.primary};
			img {
				width: 40px;
				:hover {
					transform: scale(1.1);
					transition: 0.5s;
				}
			}
		}
	}
	.emailForm {
		margin-top: 16px;
		padding: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 15px;
		width: 500px;
		box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.25);
		h3 {
			margin: 0 0 30px 0;
			color: ${colors.text};
			font-family: ${fonts.primary};
			font-size: 21px;
			font-weight: 400;
		}
		form {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 20px;
			input,
			textarea {
				width: 100%;
				background-color: #f5f5f5;
				border: 1px solid #e8e8e8;
				border-radius: 20px;
				resize: none;
				padding: 10px;
				color: ${colors.text};
				font-family: ${fonts.primary};
				font-size: 15px;
			}
			.error {
				margin: 0;
				width: 100%;
				font-size: 14px;
				color: #d90429;
			}
			button {
				background: ${colors.background};
				color: ${colors.lightText};
				font-family: ${fonts.primary};
				border: none;
				border-radius: 20px;
				font-size: 16px;
				padding: 10px 30px;
				cursor: pointer;
				:hover {
					transform: scale(1.1);
					transition: 0.7s;
				}
			}
			.disabledButtonSubmit {
				opacity: 0.7;
				:hover {
					transform: none;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		h2 {
			font-size: 25px;
		}
		.socialNetworksContainer {
			gap: 30px;
			margin: 10px 0px 5px;
			.socialNetwork {
				font-size: 14px;
				img {
					width: 35px;
				}
			}
		}
		.emailForm {
			margin-top: 16px;
			padding: 38px;
			width: 380px;
			h3 {
				margin: 0 0 25px 0;
				font-size: 17px;
			}
			form {
				gap: 18px;
				input,
				textarea {
					padding: 9px;
					font-size: 13px;
				}
				.error {
					font-size: 12px;
				}
				button {
					font-size: 14px;
					padding: 9px 25px;
				}
			}
		}
	}

	@media screen and (max-width: 550px) {
		h2 {
			font-size: 20px;
		}
		.socialNetworksContainer {
			gap: 23px;
			margin: 14px 0 7px 0;
			.socialNetwork {
				font-size: 12px;
				img {
					width: 31px;
				}
			}
		}
		.emailForm {
			margin-top: 16px;
			padding: 25px;
			width: 260px;
			h3 {
				margin: 0 0 25px 0;
				font-size: 14px;
			}
			form {
				gap: 18px;
				input,
				textarea {
					width: 90%;
					padding: 8px;
					font-size: 11px;
				}
				.error {
					width: 90%;
					font-size: 10px;
				}
				button {
					font-size: 12px;
					padding: 8px 20px;
				}
			}
		}
	}

	@media screen and (max-width: 360px) {
		.emailForm {
			width: 200px;
		}
	}
`;

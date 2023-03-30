import styled from "styled-components";
import { colors } from "./colors";

export const StyledNavbar = styled.div`
	width: 100%;
	.topNavbar {
		display: flex;
		align-items: center;
		padding: 3px 6.5%;
		background-color: ${colors.lightBackground};
		border-bottom: 1px #cacaca solid;

		.shippingSVG {
			height: 35px;
		}

		h4,
		p {
			margin: 0 0 0 10px;
			font-size: 14px;
			color: ${colors.text};
		}
	}

	.bottomNavbar {
		display: flex;
		align-items: center;
		padding: 3px 6% 6px 6%;
		background-color: ${colors.lightBackground};
		box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.25);

		.logoIMG {
			width: 100px;
		}

		.openBtn {
			display: none;
			position: absolute;
			right: 6%;
		}

		nav {
			display: flex;
			justify-content: space-between;
			width: -webkit-fill-available;

			.closeBtn {
				display: none;
			}
			.leftUlNav {
				gap: 35px;
				margin: 0 0 0 2%;
			}
			.rightUlNav {
				gap: 13px;
			}
		}

		ul {
			display: flex;
			align-items: center;
			list-style: none;
			padding: 0;
		}

		a {
			text-decoration: none;
			font-size: 16px;
			color: ${colors.text};
			:active {
				color: ${colors.text};
				opacity: 0.7;
			}
		}

		.leftNavItem {
			--clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
			position: relative;
			:hover {
				--clippy: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
			}
		}

		.leftNavItem::after {
			content: "";
			display: block;
			background-color: #febd59;
			width: 90%;
			height: 3px;
			margin-top: 3px;
			clip-path: var(--clippy);
			transition: clip-path 0.3s;
			position: absolute;
		}

		.instagramSVG,
		.facebookSVG {
			height: 32px;
			color: ${colors.text};
			:hover {
				transform: scale(1.1);
				transition: 0.5s;
			}
		}
	}

	@media screen and (max-width: 768px) {
		.topNavbar {
			padding: 3px 4.5%;
			.shippingSVG {
				width: 28px;
			}
			h4,
			p {
				margin: 0px 0px 0px 5px;
				font-size: 11px;
			}
		}

		.bottomNavbar {
			padding: 3px 3.5% 6px 3.5%;
			.openBtn {
				display: flex;
				right: 3.5%;
				background-color: ${colors.lightBackground};
				border: none;
				.menuSVG {
					color: ${colors.text};
					width: 30px;
				}
			}
			.logoIMG {
				width: 80px;
			}

			nav {
				position: fixed;
				align-items: center;
				flex-direction: column;
				justify-content: center;
				background-color: ${colors.lightBackground};
				top: 0;
				right: 0;
				width: 0;
				height: 100%;
				z-index: -1;
				transition: all 0.4s ease;
				.closeBtn {
					display: none;
					position: absolute;
					top: 8px;
					right: 8px;
					background-color: ${colors.lightBackground};
					border: none;
					.crossSVG {
						color: ${colors.text};
						width: 40px;
					}
				}
				.leftUlNav {
					display: none;
				}
				.rightUlNav {
					display: none;
					position: absolute;
					flex-direction: row;
					bottom: 0;
				}
				&.isActive {
					display: flex;
					width: 75%;
					box-shadow: -2px 0px 10px 0px rgba(0, 0, 0, 0.25);
					z-index: 999;
					.closeBtn,
					.rightUlNav,
					.leftUlNav {
						display: flex;
					}
				}
			}

			ul {
				flex-direction: column;
			}
		}
	}

	@media screen and (max-width: 550px) {
		.topNavbar {
			padding: 5px 2.5%;
			.shippingSVG {
				display: none;
			}
			h4,
			p {
				font-size: 9px;
				text-align: center;
			}
		}

		.bottomNavbar {
			padding: 3px 2.5% 6px 2.5%;
			.logoIMG {
				width: 70px;
			}
			.openBtn {
				right: 2.5%;
				.menuSVG {
					width: 28px;
				}
			}
		}
	}
`;

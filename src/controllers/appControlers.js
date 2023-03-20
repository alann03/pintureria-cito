import { PAINT_SHOP_INFO } from "../data/data";

const { delivery } = PAINT_SHOP_INFO;

export const getShippingLocations = () => {
	let resp = "";
	delivery.forEach((location) => {
		if (delivery.indexOf(location) === delivery.length - 1) resp += `y ${location}.`;
		else if (delivery.indexOf(location) === delivery.length - 2) resp += `${location} `;
		else resp += `${location}, `;
	});
	return resp;
};

import { PAINT_SHOP_INFO } from "../data/data";

const { delivery, schedule } = PAINT_SHOP_INFO;

export const getShippingLocations = () => {
	let resp = "";
	delivery.forEach((location) => {
		if (delivery.indexOf(location) === delivery.length - 1) resp += `y ${location}.`;
		else if (delivery.indexOf(location) === delivery.length - 2) resp += `${location} `;
		else resp += `${location}, `;
	});
	return resp;
};

export const getOpenOrClosedData = () => {
	const today = new Date().toString().split(" ");
	const day = today[0];
	const hour = Number(today[4].substring(0, 5).replace(":", ""));
	const status = {
		open: true,
		day,
		hour,
	};
	const openingHour = Number(schedule.monday_to_friday.opening.replace(":", ""));
	const closingHour = Number(schedule.monday_to_friday.closing.replace(":", ""));
	const closingHourSat = Number(schedule.saturday.closing.replace(":", ""));
	if (
		day === "Sun" ||
		(day === "Sat" && !(hour >= openingHour && hour <= closingHourSat)) ||
		(day !== "Sun" && day !== "Sat" && !(hour >= openingHour && hour <= closingHour))
	)
		status.open = false;
	return status;
};

export const formValidate = (input) => {
	const errors = {};

	if (input.name) {
		if (input.name.length > 30) errors.name = "El nombre es muy largo";
	}
	if (input.email) {
		if (
			!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
				input.email,
			)
		)
			errors.email = "Debes introducir un email válido";
		else if (input.email.length > 50) errors.name = "El email es muy largo";
	}
	if (input.message) {
		if (input.message.length > 500) errors.message = "El mensaje es muy largo";
	}

	return errors;
};

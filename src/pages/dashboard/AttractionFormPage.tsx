import React from "react";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./AttractionFormPage.module.scss";
import BaseFormComponent, { FieldProps } from "components/BaseFormComponent";
import dayjs from "dayjs";
import AttractionService from "services/AttractionService";
import { Attraction } from "models/Attraction";

// const marinaBaySands: Attraction = {
// 	id: 0,
// 	name: "Marina Bay Sands",
// 	overview: `Marina Bay Sands is an integrated resort fronting Marina Bay in Singapore, owned by the Las Vegas Sands corporation. At its opening in 2010, it was billed as the world's most expensive standalone casino property.`,
// 	description: `Marina Bay Sands is located at Bayfront MRT Station and steps from the lively Central Business District. Consisting of 3 buildings connected by a magnificent rooftop park, it boasts a casino, mall, museum, theaters and many fine-dining options.
//     Guests have access to the rooftop Infinity Pool where they can enjoy a panoramic view of the city's skyline. A luxury shopping mall is also on site, and free WiFi is available in public areas.`,
// 	price: 1,
// 	openingDate: "2010-04-27",
// 	location: "Marina Bay, Singapore",
// 	category: "Hotel, Casino, Shopping, and Entertainment",
// 	targetAudience: "Tourists, Locals, Business People",
// 	address: {
// 		street: "10 Bayfront Avenue",
// 		city: "Singapore",
// 		state: "Singapore",
// 		country: "Singapore",
// 		zipCode: "018956",
// 	},
// };
// const singaporeBotanicGardens: Attraction = {
// 	id: 0,
// 	name: "Singapore Botanic Gardens",
// 	overview: `The Singapore Botanic Gardens is a 161-year-old tropical garden located at the fringe of Singapore's Orchard Road shopping district. It is one of three gardens, and the only tropical garden, to be honoured as a UNESCO World Heritage Site.`,
// 	description: `The Singapore Botanic Gardens spans 82 hectares and features a small tropical rainforest, a ginger garden, and an orchid garden. The National Orchid Garden, located within the Botanic Gardens, is home to a collection of more than 1,000 species and 2,000 hybrids of orchids.
//     Visitors can enjoy daily events, concerts, exhibitions, and a children's garden. Free WiFi is available throughout the park.`,
// 	price: 0, // Free admission with exception for National Orchid Garden
// 	openingDate: "1859-06-01",
// 	location: "Orchard Road, Singapore",
// 	category: "Botanic Garden, Nature, and Education",
// 	targetAudience: "Tourists, Locals, Nature Enthusiasts, Families",
// 	address: {
// 		street: "1 Cluny Road",
// 		city: "Singapore",
// 		state: "Singapore",
// 		country: "Singapore",
// 		zipCode: "259569",
// 	},
// };
const singaporeRailCorridor: Attraction = {
	id: 2,
	name: "The Singapore Rail Corridor",
	overview: `The Singapore Rail Corridor is a green corridor that runs the length of Singapore, from the North to the South, where the old railway tracks of the Keretapi Tanah Melayu (KTM) used to be.`,
	description: `Stretching across 24 km, the Singapore Rail Corridor is a shared space where communities can gather and participate in a range of recreational activities. This linear park cuts through various residential and business areas, showcasing the contrast between Singapore's lush greenery and its urban environment. 
    The Rail Corridor is perfect for cycling, jogging, walking, and observing nature. It's also an important refuge for native fauna and flora. The trail's key attractions include the conserved Bukit Timah Railway Station and the iconic steel truss railway bridges.`,
	openingDate: "2011-07-01",
	location: "Across Singapore",
	category: "Nature, Park, Recreation, and History",
	targetAudience:
		"Tourists, Locals, Nature Enthusiasts, Historians, Fitness Enthusiasts",
	address: {
		street: "Rail Corridor",
		city: "Singapore",
		state: "Singapore",
		country: "Singapore",
		zipCode: "",
	},
};

const AttractionFormPage: React.FC = () => {
	const navigate = useNavigate();

	const fields: FieldProps[] = [
		{
			name: "name",
			label: "Name",
			rules: [{ required: true, message: "Please input the attraction name!" }],
			type: "input",
		},
		{
			name: "image",
			label: "Image",
			type: "image",
		},
		{
			name: "overview",
			label: "Overview",
			rules: [
				{ required: true, message: "Please input the attraction overview!" },
			],
			type: "textarea",
		},
		{
			name: "description",
			label: "Description",
			type: "textarea",
		},
		{
			name: "address",
			label: "Address",
			type: "object",
			fields: [
				{
					name: "street",
					label: "Street",
					rules: [{ required: true, message: "Please input the street!" }],
					type: "input",
				},
				{
					name: "city",
					label: "City",
					rules: [{ required: true, message: "Please input the city!" }],
					type: "input",
				},
				{
					name: "state",
					label: "State",
					rules: [{ required: true, message: "Please input the state!" }],
					type: "input",
				},
				{
					name: "country",
					label: "Country",
					rules: [{ required: true, message: "Please input the country!" }],
					type: "input",
				},
				{
					name: "zipCode",
					label: "Zip Code",
					rules: [{ required: true, message: "Please input the zip code!" }],
					type: "input",
				},
			],
		},
		{
			name: "price",
			label: "Price",
			type: "number",
		},
		{
			name: "location",
			label: "Location",
			type: "input",
		},
		{
			name: "category",
			label: "Category",
			type: "input",
		},
		{
			name: "targetAudience",
			label: "Target Audience",
			type: "input",
		},
		{
			name: "openingDate",
			label: "Opening Date",
			type: "date",
		},
	];

	const initialValues = {
		name: singaporeRailCorridor.name,
		overview: singaporeRailCorridor.overview,
		description: singaporeRailCorridor.description,
		address: {
			street: singaporeRailCorridor.address.street,
			city: singaporeRailCorridor.address.city,
			state: singaporeRailCorridor.address.state,
			country: singaporeRailCorridor.address.country,
			zipCode: singaporeRailCorridor.address.zipCode,
		},
		price: singaporeRailCorridor.price,
		location: singaporeRailCorridor.location,
		category: singaporeRailCorridor.category,
		targetAudience: singaporeRailCorridor.targetAudience,
		openingDate: dayjs(singaporeRailCorridor.openingDate),
	};

	const onFinish = async (values: Attraction) => {
		console.log(values);
		try {
			if (values.openingDate)
				values.openingDate = dayjs(values.openingDate).format("YYYY-MM-DD");

			// Send flattened object instead
			await AttractionService.addAttraction(values);
			navigate(`/dashboard/attraction/`);
		} catch (error) {
			console.error("An error occurred while creating the attraction:", error);
		}
	};

	return (
		<div className={styles.attractionFormPage}>
			<Typography.Title>Add a new Attraction</Typography.Title>
			<BaseFormComponent
				onFinish={onFinish}
				fields={fields}
				initialValues={initialValues}
			/>
		</div>
	);
};

export default AttractionFormPage;

// AddEventPage.tsx
import React from "react";
import { Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./EventFormPage.module.scss";
import BaseFormComponent, { FieldProps } from "components/BaseFormComponent";
import { Event } from "./EventDetailPage";
import dayjs from "dayjs";
import eventService from "services/EventService";

type FormValues = Omit<
	Event,
	"organizer" | "organizerId" | "currentParticipants"
> & {
	street: string;
	city: string;
	state: string;
	country: string;
	zipCode: string;
};
const EventFormPage: React.FC = () => {
	const navigate = useNavigate();
	const techConferenceFormValues: FormValues = {
		name: "Tech Conference 2023",
		description:
			"An annual gathering of tech enthusiasts, developers, and innovators. Features keynotes, workshops, and networking sessions.",
		overview:
			"Join us for the Tech Conference 2023 where you will have the opportunity to learn about the latest trends in technology, hear from industry experts, and network with fellow tech enthusiasts.",
		image: "https://example.com/image.jpg",
		startDateTime: dayjs().add(1, "month").hour(9).minute(0),
		endDateTime: dayjs().add(1, "month").hour(18).minute(0),
		location: "Conference Hall",
		minPeople: 50,
		maxPeople: 500,
		eventType: "Conference",
		targetAudience: "Developers, Tech Enthusiasts, Innovators",
		fee: 50,
		street: "1 Marina Blvd",
		city: "Singapore",
		state: "Singapore",
		country: "Singapore",
		zipCode: "018989",
	};

	const onFinish = async (values: FormValues) => {
		try {
			await eventService.createEvent(values);
			navigate(`/dashboard/event/`);
		} catch (error) {
			message.error("An error occurred while creating the event");
		}
	};

	const fields: FieldProps[] = [
		{
			name: "name",
			label: "Name",
			rules: [{ required: true, message: "Please input the event name!" }],
		},
		{
			name: "image",
			label: "Image",
			type: "image",
		},
		{
			name: "overview",
			label: "Overview",
			rules: [{ required: true, message: "Please input the event overview!" }],
			type: "textarea",
		},
		{
			name: "description",
			label: "Description",
			type: "textarea",
		},
		{
			name: "location",
			label: "Location",
			type: "input",
		},
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
		{
			name: "startDateTime",
			label: "Start Date",
			rules: [{ required: true, message: "Please input the start date!" }],
			type: "datetime",
		},
		{
			name: "endDateTime",
			label: "End Date",
			type: "datetime",
		},
		{
			name: "minPeople",
			label: "Min People",
			type: "number",
		},
		{
			name: "maxPeople",
			label: "Max People",
			type: "number",
		},
		{
			name: "eventType",
			label: "Event Type",
		},
		{
			name: "targetAudience",
			label: "Target Audience",
		},
		{
			name: "fee",
			label: "Fee",
			type: "number",
		},
	];

	return (
		<div className={styles.eventFormPage}>
			<Typography.Title>Add a new Event</Typography.Title>

			<BaseFormComponent
				fields={fields}
				onFinish={onFinish}
				initialValues={techConferenceFormValues}
			/>
		</div>
	);
};

export default EventFormPage;

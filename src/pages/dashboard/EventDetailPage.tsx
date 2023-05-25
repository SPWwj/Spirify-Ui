import React, { useCallback, useContext, useEffect, useState } from "react";
import { Typography, Image, Descriptions, Button, Tag, message } from "antd";
import ReactMarkdown from "react-markdown";
import styles from "./EventDetailPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useImageLoader } from "utilities/Helper";
import dayjs from "dayjs";
import EventService from "services/EventService";
import { AuthContext } from "context/AuthContext";

export interface Event {
	name: string;
	description?: string;
	overview: string;
	organizer: string;
	organizerId: string;
	image?: string;
	startDateTime: dayjs.Dayjs;
	endDateTime?: dayjs.Dayjs;
	location: string;
	minPeople?: number;
	maxPeople?: number;
	eventType?: string;
	targetAudience?: string;
	currentParticipants?: number;
	fee?: number;
	city: string;
	country: string;
	state: string;
	zipCode: string;
	street: string;
	isJoin?: boolean;
}

const EventDetailPage: React.FC = () => {
	const { id } = useParams();
	const { username } = useContext(AuthContext)!;
	const [event, setEvent] = useState<Event | null>(null);
	const { src, style } = useImageLoader(event?.image || "");
	const navigate = useNavigate();

	const fetchEventData = useCallback(async () => {
		try {
			const eventData = await EventService.getEvent(id!);
			if (eventData.startDateTime) {
				eventData.startDateTime = dayjs(eventData.startDateTime);
			}
			if (eventData.endDateTime) {
				eventData.endDateTime = dayjs(eventData.endDateTime);
			}
			setEvent(eventData);
		} catch (error) {
			message.error("Failed to fetch event data!");
		}
	}, [id]);

	useEffect(() => {
		fetchEventData();
	}, [fetchEventData]);

	const deleteEvent = async () => {
		try {
			await EventService.deleteEvent(id!);
			setTimeout(() => {
				navigate(`/dashboard/event`);
			}, 1000); // Delay of 1 second
		} catch (error) {
			message.error("Failed to delete event!");
		}
	};
	const joinEvent = async () => {
		try {
			await EventService.joinEvent(id!);
			fetchEventData(); // Refresh the event data after joining
		} catch (error) {
			message.error("Failed to join the event!");
		}
	};

	if (!event) {
		return <div>Loading...</div>;
	}

	const currentParticipantsColor =
		event.currentParticipants && event.minPeople && event.maxPeople
			? event.currentParticipants < event.minPeople
				? "black"
				: event.currentParticipants < event.maxPeople
				? "green"
				: "purple"
			: "black";

	return (
		<div className={styles.eventDetail}>
			<Typography.Title className={styles.title}>{event.name}</Typography.Title>
			{event.image && (
				<div className={styles.imageContainer}>
					<Image
						className={styles.cardImage} // apply CSS classes
						alt={id}
						src={src}
						style={style}
					/>
				</div>
			)}
			<ReactMarkdown className={styles.markdown}>
				{event.overview}
			</ReactMarkdown>
			{event.description && (
				<ReactMarkdown className={styles.markdown}>
					{event.description}
				</ReactMarkdown>
			)}
			<Descriptions className={styles.descriptions}>
				<Descriptions.Item label="Organizer">
					{event.organizer}
				</Descriptions.Item>
				<Descriptions.Item label="Organizer Id">
					{event.organizerId}
				</Descriptions.Item>
				<Descriptions.Item label="Start Time">
					{dayjs(event.startDateTime).format("YYYY-MM-DD HH:mm")}
				</Descriptions.Item>
				{event.endDateTime && (
					<Descriptions.Item label="End Time">
						{dayjs(event.endDateTime).format("YYYY-MM-DD HH:mm")}
					</Descriptions.Item>
				)}
				<Descriptions.Item label="Location">{event.location}</Descriptions.Item>
				<Descriptions.Item label="Address">
					{event.street}, {event.city}, {event.country}
				</Descriptions.Item>
				{(event.minPeople || event.maxPeople || event.currentParticipants) && (
					<Descriptions.Item
						label="Participants"
						className={styles.participantGroup}
					>
						<div className={styles.tagContainer}>
							{event.minPeople && (
								<Tag className={styles.participant}>Min: {event.minPeople}</Tag>
							)}
							{event.maxPeople && (
								<Tag className={styles.participant}>Max: {event.maxPeople}</Tag>
							)}
							{event.currentParticipants && (
								<Tag
									className={styles.participant}
									style={{ color: currentParticipantsColor }}
								>
									Current: {event.currentParticipants}
								</Tag>
							)}
						</div>
					</Descriptions.Item>
				)}
				{event.fee && (
					<Descriptions.Item label="Fee">
						<Tag>
							{new Intl.NumberFormat("en-sg", {
								style: "currency",
								currency: "SGD",
							}).format(event.fee)}
						</Tag>
					</Descriptions.Item>
				)}
				{event.eventType && (
					<Descriptions.Item label="Event Type">
						{event.eventType}
					</Descriptions.Item>
				)}
				{event.targetAudience && (
					<Descriptions.Item label="Target Audience">
						{event.targetAudience}
					</Descriptions.Item>
				)}
			</Descriptions>
			<div className={styles.buttonContainer}>
				{username &&
					(username === event.organizer ? (
						<Button danger className={styles.button} onClick={deleteEvent}>
							Remove Event
						</Button>
					) : (event.maxPeople === null ||
							event.currentParticipants! < event.maxPeople!) &&
					  !event.isJoin ? (
						<Button className={styles.button} onClick={joinEvent}>
							Join
						</Button>
					) : (
						<Button className={styles.button} disabled>
							Join
						</Button>
					))}
			</div>
		</div>
	);
};

export default EventDetailPage;

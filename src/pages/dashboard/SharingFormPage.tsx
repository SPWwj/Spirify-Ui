// AddSharingPage.tsx
import React from "react";
import { Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./SharingFormPage.module.scss";
import BaseFormComponent, { FieldProps } from "components/BaseFormComponent";
import { SharingItem } from "./SharingDetailPage";
import sharingService from "services/SharingService";

type FormValues = Omit<
	SharingItem,
	"ownerName" | "ownerId" | "borrowerId" | "borrowerName" | "isAvaliable"
>;

const SharingFormPage: React.FC = () => {
	const navigate = useNavigate();

	const onFinish = async (values: FormValues) => {
		console.log("Received values of form: ", values);
		try {
			await sharingService.createItem(values);
			navigate(`/dashboard/sharing/`);
		} catch (error) {
			message.error("An error occurred while creating the sharing item:");
		}
	};

	const threeDPrinterFormValues: FormValues = {
		name: "3D Printer",
		address: "789 Oak St, Springfield",
		description: "An efficient 3D printer in excellent working condition.",
		overview:
			"This 3D printer is suitable for both beginners and experienced users. It supports a wide range of printing materials and provides high quality, precise prints. Ideal for prototyping, small production runs, and educational projects.",
		type: "Technology",
		fee: 40,
	};

	const fields: FieldProps[] = [
		{
			name: "name",
			label: "Name",
			rules: [{ required: true, message: "Please input the item name!" }],
		},
		{
			name: "image",
			label: "Image",
			type: "image",
		},
		{
			name: "overview",
			label: "Overview",
			rules: [{ required: true, message: "Please input the item Overview!" }],
			type: "textarea",
		},
		{
			name: "description",
			label: "Description",
			type: "textarea",
		},
		{
			name: "type",
			label: "Type",
		},
		{
			name: "fee",
			label: "Fee",
		},
	];

	return (
		<div className={styles.sharingFormPage}>
			<Typography.Title>Add a new Sharing Item</Typography.Title>
			<BaseFormComponent
				fields={fields}
				onFinish={onFinish}
				initialValues={threeDPrinterFormValues}
			/>
		</div>
	);
};

export default SharingFormPage;

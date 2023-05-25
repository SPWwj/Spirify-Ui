import React from "react";
import {
	Form,
	Input,
	DatePicker,
	Checkbox,
	Button,
	InputNumber,
	TimePicker,
} from "antd";
import { UploadComponent } from "./UploadComponent";

export interface FieldProps {
	name: string;
	label: string;
	rules?: any[];
	type?:
		| "input"
		| "textarea"
		| "date"
		| "checkbox"
		| "number"
		| "time"
		| "datetime"
		| "image"
		| "object";
	value?: any;
	fields?: FieldProps[];
}

interface BaseFormProps {
	fields: FieldProps[];
	onFinish: (values: any) => void;
	initialValues?: Record<string, any>;
}

const BaseFormComponent: React.FC<BaseFormProps> = ({
	fields,
	onFinish,
	initialValues,
}) => {
	const [form] = Form.useForm();

	const renderField = (field: FieldProps, fieldName?: string[]) => {
		const fieldKey = fieldName ? [...fieldName, field.name] : [field.name];
		let fieldInput;

		switch (field.type) {
			case "textarea":
				fieldInput = <Input.TextArea />;
				break;
			case "date":
				fieldInput = <DatePicker format="YYYY-MM-DD" showTime={false} />;
				break;
			case "checkbox":
				fieldInput = <Checkbox />;
				break;
			case "number":
				fieldInput = <InputNumber />;
				break;
			case "time":
				fieldInput = <TimePicker />;
				break;
			case "datetime":
				fieldInput = <DatePicker showTime />;
				break;
			case "image":
				fieldInput = (
					<Form.Item valuePropName="fileList" extra="Image Preview">
						<UploadComponent form={form} fieldName={field.name} />
					</Form.Item>
				);
				break;
			default:
				fieldInput = <Input />;
		}

		return (
			<Form.Item
				key={fieldKey.join(".")}
				name={fieldKey}
				label={field.label}
				rules={field.rules}
			>
				{fieldInput}
			</Form.Item>
		);
	};

	const renderFields = (fields: FieldProps[], fieldName?: string[]) => {
		return fields.map((field) =>
			field.type === "object" && field.fields
				? field.fields.map((subField) =>
						renderField(
							subField,
							fieldName ? [...fieldName, field.name] : [field.name]
						)
				  )
				: renderField(field, fieldName)
		);
	};

	return (
		<Form
			form={form}
			layout="vertical"
			onFinish={onFinish}
			initialValues={initialValues}
			encType="multipart/form-data"
		>
			{renderFields(fields)}
			<Form.Item>
				<div style={{ textAlign: "right" }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</div>
			</Form.Item>
		</Form>
	);
};

export default BaseFormComponent;

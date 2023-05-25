import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import UploadService from "services/UploadService";

interface UploadComponentProps {
	form: any; // Replace `any` with the correct type
	fieldName: string; // Replace `any` with the correct type
}

// Define your own type for the custom request options
interface CustomRequestOptions {
	file: File;
	onProgress: (event: { percent: number }) => void;
	onSuccess: (response: any, file: File | Blob) => void;
	onError: (error: any) => void;
}

export const UploadComponent: React.FC<UploadComponentProps> = ({
	form,
	fieldName,
}) => {
	const [filePath, setFilePath] = useState<string | null>(null);

	const handleUploadChange = (info: any) => {
		if (info.file.status === "done") {
			const filePath = info.file.response.filePath;
			setFilePath(filePath);
			form.setFieldsValue({ [fieldName]: filePath });
		}
	};

	const handleDelete = async () => {
		try {
			if (filePath) {
				await UploadService.deleteFile(filePath);
				setFilePath(null);
				form.setFieldsValue({ [fieldName]: null });
			}
		} catch (error) {
			console.log(error);
		}
	};

	const customRequest = async ({
		file,
		onProgress,
		onSuccess,
		onError,
	}: CustomRequestOptions) => {
		try {
			// Upload the file
			const response = await UploadService.uploadFile(file);

			// Call onSuccess with the response
			onSuccess(response, file);
		} catch (error) {
			// Call onError with the error
			onError(error);
		}
	};

	return (
		<Upload
			name="logo"
			customRequest={customRequest as any}
			listType="picture"
			onRemove={handleDelete}
			onChange={handleUploadChange}
		>
			<Button icon={<UploadOutlined />}>Click to upload</Button>
		</Upload>
	);
};

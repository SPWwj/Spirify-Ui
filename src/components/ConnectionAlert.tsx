// import { Alert, Button } from "antd";
// import * as signalR from "@microsoft/signalr";
// import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "redux/store";
// import { SignalRServiceManager } from "services/SignalRServiceManger";

// const ConnectionAlert: React.FC = () => {
// 	const connectionState = useSelector(
// 		(state: RootState) => state.speechItems.connectionState
// 	);

// 	const serviceInstance = SignalRServiceManager.getInstance();

// 	const startConnection = () => {
// 		serviceInstance.startAllConnections();
// 	};

// 	const stopConnection = () => {
// 		serviceInstance.stopAllConnections();
// 	};

// 	// Return null if the connection is not disconnected
// 	if (connectionState !== signalR.HubConnectionState.Disconnected) {
// 		return null;
// 	}

// 	return (
// 		<Alert
// 			message={`SignalR Connection State: ${connectionState}`}
// 			description={
// 				<div>
// 					<Button onClick={startConnection}>Start Connection</Button>
// 					<Button onClick={stopConnection}>Stop Connection</Button>
// 				</div>
// 			}
// 			type="info"
// 		/>
// 	);
// };

// export default ConnectionAlert;
export default {};
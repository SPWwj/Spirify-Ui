import { Alert, Button } from "antd";
import * as signalR from "@microsoft/signalr";
import React, { useEffect, useState } from "react";
import { SignalRService } from "services/SignalRService";

const ConnectionAlert: React.FC = () => {
	const [connectionState, setConnectionState] =
		useState<signalR.HubConnectionState>(
			signalR.HubConnectionState.Disconnected
		);
	const [serviceInstance, setServiceInstance] = useState<SignalRService | null>(
		null
	);

	useEffect(() => {
		const instance = SignalRService.getInstance();
		setServiceInstance(instance);
		const connectionStateSubscriber = (state: signalR.HubConnectionState) => {
			console.log("State has changed: ", state);
			setConnectionState(state);
		};

		instance.subscribeToConnectionState(connectionStateSubscriber);

		// return function to be called when unmounted
		return () => {
			instance.unsubscribeFromConnectionState(connectionStateSubscriber);
		};
	}, []);

	const startConnection = () => {
		serviceInstance?.startAllConnections();
	};

	const stopConnection = () => {
		serviceInstance?.stopAllConnections();
	};

	// Return null if the connection is not disconnected
	if (connectionState !== signalR.HubConnectionState.Disconnected) {
		return null;
	}

	return (
		<Alert
			message={`SignalR Connection State: ${connectionState}`}
			description={
				<div>
					<Button onClick={startConnection}>Start Connection</Button>
					<Button onClick={stopConnection}>Stop Connection</Button>
				</div>
			}
			type="info"
		/>
	);
};

export default ConnectionAlert;

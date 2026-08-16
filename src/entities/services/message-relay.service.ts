import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from 'axios';
import { messageRelayToken, messageRelayUrl, notificationsEnabled } from "../../common/consts/env";

@Injectable()
export class MessageRelayService {
    private readonly client: AxiosInstance;

    constructor() {
        if (notificationsEnabled) {
            this.client = axios.create({
                baseURL: messageRelayUrl!,
                headers: {
                    'static-token': messageRelayToken!,
                    'Content-Type': 'application/json'
                }
            });
        }

        console.log(`Notifications are ${notificationsEnabled ? 'ON' : 'OFF'}`)
    }

    async sendNotification(recipients: string[], title: string, message: string, channel?: string) {
        try {
            const response = await this.client.post('/relay',
                {
                    provider: 'sendman',
                    recipients: recipients,
                    channel: channel,
                    title: title,
                    message: message
                })

            return response.data;
        } catch (error) {
            console.error(`Failed to send ${channel} notification: ${error}`);
        }
    }
}
import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class MessageRelayService {
    private readonly client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env.MESSAGE_RELAY_URL!,
            headers: {
                'static-token': process.env.MESSAGE_RELAY_TOKEN!,
                'Content-Type': 'application/json'
            }
        });
    }

    async sendNotification(recipients: string[], channel: string, title: string, message: string) {
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
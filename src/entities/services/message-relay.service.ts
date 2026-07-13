import { Injectable } from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class MessageRelayService {

    async sendChatNotification(recipients: string[], title: string, message: string) {
        const url = process.env.MESSAGE_RELAY_URL!;
        const token = process.env.MESSAGE_RELAY_TOKEN!;

        try {
            const response = await axios.post(
                url,
                {
                    provider: 'sendman',
                    recipients: recipients,
                    channel: 'chat',
                    title: title,
                    message: message
                },
                {
                    headers: {
                        'static-token': token,
                        'Content-Type': 'application/json'
                    }
                })
            return response.data;
        } catch (error) {
            console.error(`Failed to send chat notification: ${error}`);
        }
    }

    async sendMailNotification(recipients: string[], title: string, message: string) {
        const url = process.env.MESSAGE_RELAY_URL!;
        const token = process.env.MESSAGE_RELAY_TOKEN!;

        try {
            const response = await axios.post(
                url,
                {
                    provider: 'sendman',
                    recipients: recipients,
                    channel: 'mail',
                    title: title,
                    message: message
                },
                {
                    headers: {
                        'static-token': token,
                        'Content-Type': 'application/json'
                    }
                })
            return response.data;
        } catch (error) {
            console.error(`Failed to send mail notification: ${error}`);
        }
    }
}
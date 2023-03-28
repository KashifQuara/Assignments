const amqp = require('amqplib');

async function sendMessage() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queueName = 'hello';
    const message = 'hello world';

    await channel.assertQueue(queueName, { durable: false});
    await channel.sendToQueue(queueName, Buffer.from(message));

    console.log('Sent message:', message);

    await channel.close();
    await connection.close();
}

sendMessage();
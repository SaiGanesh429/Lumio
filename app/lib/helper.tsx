


export default function generateRandomName() {
    const firstNames = ["Ava", "Liam", "Maya", "Noah", "Zara", "Ethan", "sai", "Jayanth", "chaitanya"];
    const lastNames = ["Sharma", "Patel", "Smith", "Khan", "Wilson", "Gupta", "ganesh", "siva", "aditya", "kumar Gupta"];

    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${first} ${last}`;
}


export function generateRandomMessage() {
    const messages = [
        "Hi, how can I help you today?",
        "Thanks for reaching out to us.",
        "Could you share more details, please?",
        "I understand, let me check that.",
        "That sounds great, I agree!",
        "Please give me one moment.",
        "Is there anything else you need?",
        "I will get back to you shortly.",
        "Thanks, have a wonderful day!",
        "Sure, I can help with that."
    ];

    return messages[Math.floor(Math.random() * messages.length)];
}

console.log(generateRandomMessage());

console.log(generateRandomName()); // e.g. "Maya Wilson"
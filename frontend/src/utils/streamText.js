export async function streamText(
    text,
    onUpdate,
    speed = 35
) {
    const words = text.split(" ");

    let current = "";

    for (let i = 0; i < words.length; i++) {

        current += (i === 0 ? "" : " ") + words[i];

        onUpdate(current);

        await new Promise((resolve) =>
            setTimeout(resolve, speed)
        );

    }
}
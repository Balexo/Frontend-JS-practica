export function dispatchEvent(eventName, messageEvent, element ){
    const event = new CustomEvent(eventName, {
        detail: {
            message: messageEvent
        }
    });
    element.dispatchEvent(event);
}
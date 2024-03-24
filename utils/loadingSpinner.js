export const loadSpinner = (eventName, querySelector) =>{
    const event = new CustomEvent(eventName);

    querySelector.dispatchEvent(event);
}
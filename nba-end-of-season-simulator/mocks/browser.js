import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

worker.start({
    onUnhandledRequest: "warn", // Logs all unhandled requests
});

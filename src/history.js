import { createBrowserHistory } from "history";

const history = createBrowserHistory();

//dev only
window.routerHistory = history;

export default history;

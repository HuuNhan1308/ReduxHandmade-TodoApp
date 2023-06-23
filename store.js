import { createStore } from "./core.js";
import withLogger from "./extension/Logger.js";
import reducer from "./reducer.js";


const { attach, dispatch, connect } = createStore(withLogger(reducer));

window.dispatch = dispatch;

export {
    attach,
    connect
}
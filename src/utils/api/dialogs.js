import {axios} from "../../core";

export default {
    getAll: () => {
        return axios.get("/dialogs");
    }
}

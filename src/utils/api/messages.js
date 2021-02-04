import {axios} from "../../core";

export default {
    getAllByDialogId: (dialogId) => {
        return axios.get(`/messages?dialog=${dialogId}`);
    }
}

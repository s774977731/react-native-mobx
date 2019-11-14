import { observable,action,autorun } from 'mobx';

class CounterStore {
    @observable counter = 0;

    @action
    add = () => {
    this.counter ++;
    }

    @action
    minus = () => {
        if (this.counter > 0) {
            this.counter --;
        }
    }
}

const counterStore = new CounterStore();
export default counterStore;

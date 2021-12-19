// source: https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        // TODO: we need to check if its good before returning
        // because it can actually cause errors when the state schema changed before last save
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};

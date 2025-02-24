class KeyHandler {
    constructor(isKeyUp, keys) {
        this.isKeyUp = isKeyUp;
        this.keys = keys;
    }

    handleKey(keyEvent){
        const key = keyEvent.key;
        if (!key.startsWith('Arrow')) return;
        if (this.isKeyUp) this.keys.delete(key);
        else this.keys.add(key);
    }
}
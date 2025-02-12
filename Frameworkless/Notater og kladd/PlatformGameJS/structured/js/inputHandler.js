function handleKey(isKeyUp, key, gameModel){
    if(!key.startsWith('Arrow'))return;
    const keys = gameModel.keys;
    if(isKeyUp) keys.add(key);
    else keys.delete(key);
}
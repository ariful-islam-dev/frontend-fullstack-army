function* generateId(){
    let id = 0;

    while(true){
        yield id++
    }
}

export const getId = generateId();


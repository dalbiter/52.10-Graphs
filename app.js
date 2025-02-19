class PersonNode {
    constructor(name, adjacent) {
        this.name = name;
        this.adjacent = [];
    }
}

const homer = new PersonNode('homer simpson');
const marge = new PersonNode('marge simpson');
homer.adjacent.push(marge);
marge.adjacent.push(homer);
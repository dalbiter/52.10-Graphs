class PersonNode {
    constructor(name, adjacent = new Set()) {
        this.name = name;
        this.adjacent = adjacent;
    }
}

// const homer = new PersonNode('homer simpson');
// const marge = new PersonNode('marge simpson');
// const maggie = new PersonNode('maggie simpson')
// homer.adjacent.add(marge);
// marge.adjacent.add(homer);
// maggie.adjacent.add(homer);
// maggie.adjacent.add(marge);
// homer.adjacent.add(maggie);
// marge.adjacent.add(maggie);

class FriendGraph {
    constructor() {
        this.nodes = new Set();    
    }
    addPerson(node) {
        this.nodes.add(node);
    }
    addPeople(peopleList) {
        for(let node of peopleList) {
            this.addPerson(node);
        }
    }
    setFriends(person1, person2) {
        person1.adjacent.add(person2);
        person2.adjacent.add(person1);
    }
}



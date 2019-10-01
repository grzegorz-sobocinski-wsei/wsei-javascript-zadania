const dog = {
    type: "Mammal",
    name: "",
    setName: (newName) => {
        this.name = newName;
    }
}

dog.setName("Reksio");
console.log(dog.name);

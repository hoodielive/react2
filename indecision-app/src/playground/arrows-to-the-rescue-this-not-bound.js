const user = {
    name: "Larry Hollywood",
    cities: ['Philadelphia', 'New York', 'Dublin'], 
    printPlacesLived() {
        //const that = this; this is a workaround and will work 
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city) 
        }); 
    }
}

user.printPlacesLived(); 

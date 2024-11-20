var title_div = document.querySelector("#title");

title_div.innerHTML += "<h1>FurEverHome</h1>\n";
title_div.innerHTML += "<h2>Where Every Paw Finds Its Place</h2>\n";
title_div.innerHTML += "<br>";

function displayPetCard(cardNum, img, name, breed, age, place, fee){
    var card = document.getElementsByClassName('card')[cardNum - 1];

    card.innerHTML += '<img src="../images/' + img + '" style="width:100%">\n';
    card.innerHTML += '<h3 class="name"> <strong>' + name + '</strong> </h3>';
    card.innerHTML += '<p class="breed">' + breed + '</p>';
    card.innerHTML += '<p class="age">' + age + '</p>';
    card.innerHTML += '<p class="place">' + place + '</p>';
    card.innerHTML += '<p class="fee">' + fee + '</p>';
};

var nameToImage = {
    "Buddy": "buddy.jpeg",
    "Charlie": "charlie.jpeg",
    "Fluffy": "fluffy.webp",
    "Goofy": "goofy.avif",
    "Luna": "luna.webp",
    "Oliver": "oliver.jpeg",
    "Peanut": "peanut.jpeg",
    "Toffee": "toffee.jpeg",
};

var pet1 = {
    name: "Oliver",
    age: 4,
    breed: "Domestic Short Hair",
    place: "South Kingstown, RI",
    ageFee: 50,
    breedfee: 0,
    adoptionFee: function (ageFee, breedFee) {
        baseFee = 100;
        var totalFee = baseFee + ageFee + breedFee;
        return totalFee;
        
    }

};

var pet2 = {
    name: "Buddy",
    age: 6,
    breed: "Golden Retriever",
    place: "Westerly, RI",
    ageFee: 50,
    breedfee: 20,
    adoptionFee: function (ageFee, breedFee) {
        baseFee = 100;
        var totalFee = baseFee + ageFee + breedFee;
        return totalFee;
        
    }

}; 
var pet3 = {
    name: "Toffee",
    age: 5,
    breed: "Domestic Medium Hair",
    place: "Boston, MA",
    ageFee: 50,
    breedfee: 30,
    adoptionFee: function (ageFee, breedFee) {
        baseFee = 100;
        var totalFee = baseFee + ageFee + breedFee;
        return totalFee;
        
    }

}; 

var pet4 = {
    name: "Charlie",
    age: 9,
    breed: "Cocker Spaniel",
    place: "East Greenwich, RI",
    ageFee: 0,
    breedfee: 30,
    adoptionFee: function (ageFee, breedFee) {
        baseFee = 100;
        var totalFee = baseFee + ageFee + breedFee;
        return totalFee;
        
    }
};

displayPetCard(
    1,
    nameToImage[pet1.name],
    pet1.name,
    pet1.breed,
    pet1.age,
    pet1.place,
    pet1.fee
);

displayPetCard(
    2,
    nameToImage[pet2.name],
    pet2.name,
    pet2.breed,
    pet2.age,
    pet2.place,
    pet2.fee
);

displayPetCard(
    3,
    nameToImage[pet3.name],
    pet3.name,
    pet3.breed,
    pet3.age,
    pet3.place,
    pet3.fee
);

displayPetCard( 4, nameToImage[pet4.name], pet4.name, pet4.breed, pet4.age, pet4.place, pet4.fee);

function Pet(name, age, breed, place) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.place = place;
    this.fee = function (age, breed) {
        let amount = 100;
        if (age <= 7) amount += 50;
        switch (breed) {
            case "Tabby":
            case "Siamese":
            case "Domestic Medium Hair":
            case "Cocker Spaniel":
                amount += 30;
                break;
            case "Golden Retriever":
                amount += 20;
                break;
            default:
                break;
        }
        return amount;
    };
}

var pet5 = new Pet("Fluffy", 11, "Siamese", "Warwick,RI");
var pet6 = new Pet("Peanut", 10, "Maltese", "Johnston,RI");
var pet7 = new Pet("Goofy", 7, "Tabby", "Cranston,RI");
var pet8 = new Pet("Luna", 12, "Border Collie", "Newport, RI");

displayPetCard(
    5,
    nameToImage[pet5.name],
    pet5.name,
    pet5.breed,
    pet5.age,
    pet5.place,
    pet5.fee(pet5.age, pet5.breed)
);

displayPetCard(
    6,
    nameToImage[pet6.name],
    pet6.name,
    pet6.breed,
    pet6.age,
    pet6.place,
    pet6.fee(pet6.age, pet6.breed)
);

displayPetCard(
    7,
    nameToImage[pet7.name],
    pet7.name,
    pet7.breed,
    pet7.age,
    pet7.place,
    pet7.fee(pet7.age, pet7.breed)
);

displayPetCard(
    8,
    nameToImage[pet8.name],
    pet8.name,
    pet8.breed,
    pet8.age,
    pet8.place,
    pet8.fee(pet8.age, pet8.breed)
);
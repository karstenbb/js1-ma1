// question 1
let cat = {
    complain: function () {
        console.log("meow!");
        
    }
};

// question 2
let heading = document.querySelector("h3");

// question 3
heading.style.fontSize = "2em";

// question 4
heading.classList.add ("subheading");

// question 5
let paragraph = document.querySelectorAll ("p");

// question 6
let resultContainer = document.querySelector(".results");
resultContainer.innerHTML = `<p>New paragraph</p>`;

// question 7 -

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
function arrayOfCats(catArray) {
    for (let index = 0; index < catArray.length; index++) {
        console.log(catArray[index].name);
    }
}

arrayOfCats(cats);


// question 8 

function newArrayOfCats(catArray) {
let newHTML = "";
    for (let index = 0; index < catArray.length; index++) {
        newHTML += `<h5>${catArray[index].name}</h5>`;
    }
    return newHTML;
}

//console.log(newArrayOfCats(cats));

// question 9
resultContainer.innerHTML += newArrayOfCats(cats);

// question 10
function withAgeCatArray(catArray) {
    let newHTML = "";
    for (let index = 0; index < catArray.length; index++) {
        let ageValue = "Age unknown";
        if (catArray[index].age) {
            ageValue = catArray[index].age;
        }
        newHTML += `
    <div>
      <h5>${catArray[index].name}</h5>
      <p>${ageValue}</p>
    </div>
    `;
    }
    return newHTML;
}

resultContainer.innerHTML += withAgeCatArray(cats);




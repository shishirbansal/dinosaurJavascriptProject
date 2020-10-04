
    // Create Dino Constructor


    // Create Dino Objects

    


    // Create Human Object

    // Use IIFE to get human data from form





    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen





    let dinoTiles = '';

    let comparison = [];



    const dinoData = {
        "Dinos": [
            {
                "species": "Triceratops",
                "weight": 13000,
                "height": 114,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "First discovered in 1889 by Othniel Charles Marsh"
            },
            {
                "species": "Tyrannosaurus Rex",
                "weight": 11905,
                "height": 144,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "The largest known skull measures in at 5 feet long."
            },
            {
                "species": "Anklyosaurus",
                "weight": 10500,
                "height": 55,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Anklyosaurus survived for approximately 135 million years."
            },
            {
                "species": "Brachiosaurus",
                "weight": 70000,
                "height": "372",
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Jurasic",
                "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
            },
            {
                "species": "Stegosaurus",
                "weight": 11600,
                "height": 79,
                "diet": "herbavor",
                "where": "North America, Europe, Asia",
                "when": "Late Jurasic to Early Cretaceous",
                "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
            },
            {
                "species": "Elasmosaurus",
                "weight": 16000,
                "height": 59,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
            },
            {
                "species": "Pteranodon",
                "weight": 44,
                "height": 20,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
            },
            {
                "species": "Pigeon",
                "weight": 0.5,
                "height": 9,
                "diet": "herbavor",
                "where": "World Wide",
                "when": "Holocene",
                "fact": "All birds are living dinosaurs."
            }
        ]
    }






    const comparisonMethods = {

        compareEat(human){


            if(human.diet !=='herbavor'){
                return this.diet === 'carnivor'?'dino and human are carnivor':'human is carnivor and dino is herbavor';
            }
            return this.diet ==='carnivor'?'dino is carnivor':'dino is herbavor';
        },


        compareWeight(human){

            const dinoWeight = parseInt(this.weight);
            if(dinoWeight > human.weight){
                return `dino is ${(dinoWeight/human.weight).toFixed(2)} times heavier than human`;
            }
            else if(dinoWeight < human.weight){
                return `human is ${(human.weight/dinoWeight).toFixed(2)} times heavier than dino`;
            }

            return 'human and dino are same weight';

        },

        compareHeight(human){


            const dinoHeight = parseInt(this.height);

            if(dinoHeight > human.height){
                return `DinoHeight is ${(dinoHeight/human.height).toFixed(2)} times more than human`;
            }
            else if(dinoHeight < human.height){
                return `Human Height is ${(human.height/dinoHeight).toFixed(2)} times more than dino`;
            }

            return 'human and dino height are same';

        }

    };




    function dinoConstructor(dinoObj, humanObj){
        debugger;
        const objectMixing = Object.assign(dinoObj, comparisonMethods);

        
        let factsRecord = Object.keys(objectMixing);
        factsRecord.splice(factsRecord.indexOf('species'), 1);

        const randomFact = () => {
            if (objectMixing.species === 'Pigeon') {
                return 'All birds are considered dinosaurs.';
            }

            const factRecord = factsRecord[Math.floor(Math.random() * factsRecord.length)];
            debugger;
            return typeof objectMixing[factRecord] === 'function' ? objectMixing[factRecord](humanObj) : objectMixing.fact; 
        };

        return {
            species: () => objectMixing.species,
            fact: () => randomFact()
        }
    };



    const {Dinos} = dinoData; 


    // On button click, prepare and display infographic
    function compareMe(){

        //var x = document.getElementsByClassName("form-container");

        

        const name = document.getElementById("dino-compare").elements[0].value;
        const feet = document.getElementById("dino-compare").elements[1].value;
        const inches = document.getElementById("dino-compare").elements[2].value;
        const weight = document.getElementById("dino-compare").elements[3].value;
        const diet = document.getElementById("dino-compare").elements[4].value;
        const height = parseInt(feet) * 12 + parseInt(inches); 


        if(name === null || height === null || diet === null || weight === null) return;


        const humanObject ={
            species : 'human',
            name :name,
            height : height, 
            diet : diet,
            weight : weight

        }


        for(const x in Dinos){



            comparison.push(dinoConstructor(Dinos[x],humanObject));

        }

        debugger;
        

        comparison.splice(4,0,humanObject); // refered to w3schools.com

        let tiles='';

        for(const dino of comparison){
            debugger;
            tiles += '<div class="grid-item">';
            if (dino.species === 'human') {
                tiles += `<img src="images/${dino.species}.png" alt=""><h3>${dino.name}</h3><p></p>`;
            }else{
                // species, name, img, fact
                tiles += `<img src="images/${dino.species()}.png" alt=""><h3>${dino.species()}</h3><br><br><br><br><p>${dino.fact()}<br>`;
            }
            tiles += '</p></div>';
        }



        document.getElementById('dino-compare').remove();

        document.getElementById('grid').innerHTML = tiles;








  

    
    }




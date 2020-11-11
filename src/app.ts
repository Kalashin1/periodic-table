import { groupOne } from './groups/group_one.js';
import { Elements } from './elements/properties'
import { groupTwo } from './groups/group_two.js'
import { TransitionMetals } from './groups/transition_metals.js'
import { groupThreeEl } from './groups/group_three.js'
import { groupFourEl } from './groups/group_four.js'
import { Pnictogens } from './groups/group_five.js'
import { Chalcogens } from './groups/group_six.js'
import { Halogens } from './groups/group_seven.js'
import { NobleGas } from './groups/group_eight.js'
import { Lanathides } from './groups/lanathides.js';
import { Actinides } from './groups/actinides.js';


let alkaliMetals  = new groupOne();
let alkaliEarthMetals = new groupTwo();
let transitionMetals = new TransitionMetals();
let groupThree = new groupThreeEl()
let groupFour = new groupFourEl()
let groupFive = new Pnictogens()
let groupSix = new Chalcogens();
let groupSeven = new Halogens();
let groupEight = new NobleGas();
let lanathides = new Lanathides();
let actinides = new Actinides()

// METHOD THAT RENDERS THE ELEMENT INTO THE HTML
let render = (group: Elements[], target:string)=>{
    let groupDiv = document.createElement('div')
    groupDiv.classList.add('group-div')

    group.forEach(element =>{
        let pName = document.createElement('p');
        pName.className = "name"
        let pSymbol = document.createElement('p');;
        pSymbol.className = 'symbol'
        let pAtomicNo = document.createElement('p');
        pAtomicNo.className = 'atomic-no'
        let pAtomicMass = document.createElement('p');
        pAtomicMass.className = 'atomic-mass'
        let div = document.createElement('div');
        
        div.className = `${element.state}`;
        div.classList.add('element');
        div.classList.add(`${element.phase}`)
        pName.textContent = element.name;
        pSymbol.textContent = element.symbol;
        pAtomicMass.textContent = element.atomicMass.toString();
        pAtomicNo.textContent = element.atomicNo.toString();
        
        div.append(pAtomicNo);
        div.append(pName);
        div.append(pSymbol);
        div.append(pAtomicMass);



//      back of all element card
        let elBack = document.createElement('div');
        elBack.className = 'elment-back';



        groupDiv.appendChild(div);
    });
    

    
    console.log(groupDiv)
    document.querySelector(target)!.appendChild(groupDiv);
}

render(alkaliMetals.elements, '.periodic-table .s-block .alkali-metals');
render(alkaliEarthMetals.elements, '.periodic-table .s-block .alkaline-earth-metals');
render(transitionMetals.elements, '.periodic-table .d-block');
render(groupThree.elements, '.periodic-table .p-block .group-three');
render(groupFour.elements, '.periodic-table .p-block .group-four');
render(groupFive.elements, '.periodic-table .p-block .group-five');
render(groupSix.elements, '.periodic-table .p-block .group-six');
render(groupSeven.elements, '.periodic-table .p-block .group-seven');
render(groupEight.elements, '.periodic-table .p-block .group-eight');
render(lanathides.lanathides, '.periodic-table .f-block .lanathides');
render(actinides.actinides, '.periodic-table .f-block .actinides')
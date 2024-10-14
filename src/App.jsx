import { useState } from "react";

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

export default function App() {
    const [showStory, setShowStory] = useState(false);
    const [name, setName] = useState('Bob');
    const [unitSystem, setUnitSystem] = useState('us');
    const [temperature, setTemperature] = useState(94);
    const [weight, setWeight] = useState(300);
    const [xItem, setXItem] = useState('');
    const [yItem, setYItem] = useState('');
    const [zItem, setZItem] = useState('');

    const xItems = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
    const yItems = ['the soup kitchen', 'Disneyland', 'the White House'];
    const zItems = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

    function generateStory(event) {
        event.preventDefault();
        
        const newXItem = randomValueFromArray(xItems);
        const newYItem = randomValueFromArray(yItems);
        const newZItem = randomValueFromArray(zItems);
        
        setXItem(newXItem);
        setYItem(newYItem);
        setZItem(newZItem);

        let newTemperature = 94;
        let newWeight = 300; 

        if (unitSystem === "uk") {
            newTemperature = Math.round((newTemperature - 32) * (5 / 9));
            newWeight = Math.round(newWeight / 14); 
        }

        setTemperature(newTemperature);
        setWeight(newWeight);
        setShowStory(true);
    }

    return (
        <>
            <div>
                <label htmlFor="customname">Enter custom name:</label>
                <input
                    type="text"
                    placeholder=""
                    onChange={(event) => setName(event.target.value || "Bob")}
                />
            </div>
            <div>
                <label htmlFor="us">US</label>
                <input
                    type="radio"
                    value="us"
                    checked={unitSystem === "us"}
                    onChange={() => setUnitSystem("us")}
                />
                <label htmlFor="uk">UK</label>
                <input
                    type="radio"
                    value="uk"
                    checked={unitSystem === "uk"}
                    onChange={() => setUnitSystem("uk")}
                />
            </div>
            <div>
                <button onClick={generateStory}>Generate random story</button>
            </div>
            {showStory && (
                <p>
                    It was {temperature} degrees outside, 
                    so {xItem} went for a walk. 
                    When they got to {yItem}, 
                    they stared in horror for a few moments, 
                    then {zItem}. {name} saw the whole thing, 
                    but was not surprised — {xItem} weighs {weight} pounds, 
                    and it was a hot day.
                </p>
            )}
        </>
    );
}
import { useState } from "react";

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

export default function App() {
    const [name, setName] = useState('Bob');
    const [unitSystem, setUnitSystem] = useState('us');
    const [story, setStory] = useState('');

    const xItems = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
    const yItems = ['the soup kitchen', 'Disneyland', 'the White House'];
    const zItems = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

    function generateStory(event) {
        event.preventDefault();

        const newXItem = randomValueFromArray(xItems);
        const newYItem = randomValueFromArray(yItems);
        const newZItem = randomValueFromArray(zItems);

        const inputName = document.getElementById("customname").value || "Bob";
        const temperature = 94;
        const weight = 300;
        let unitTemperature = 'fahrenheit';
        let unitWeight = 'pounds';

        let finalTemperature = temperature;
        let finalWeight = weight;

        if (unitSystem === "uk") {
            finalTemperature = Math.round((temperature - 32) * (5 / 9));
            unitTemperature = 'centigrade';
            finalWeight = Math.round(weight / 14);
            unitWeight = 'stone';
        }

        const generatedStory = `It was ${finalTemperature} ${unitTemperature} outside, 
        so ${newXItem} went for a walk. 
        When they got to ${newYItem}, 
        they stared in horror for a few moments, 
        then ${newZItem}. ${inputName} saw the whole thing, 
        but was not surprised — ${newXItem} weighs ${finalWeight} ${unitWeight}, 
        and it was a hot day.`;

        setStory(generatedStory);
    }

    return (
        <>
            <div>
                <label htmlFor="customname">Enter custom name:</label>
                <input
                    type="text"
                    id="customname"
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
            {story && (
                <p>{story}</p>
            )}
        </>
    );
}

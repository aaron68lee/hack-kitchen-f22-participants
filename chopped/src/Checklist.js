import React, {useState} from "react";
//import React from "react";

function Check()
{
    const checkList = ["Flour", "Eggs", "Butter", "Banana", "Cinnamon", "Baking Soda", "Salt", "Milk"];
    const [checked, setChecked] = useState([]);


    // Generate string of checked items
    const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
        })
    : "";

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    // Return classes based on whether item is checked
    var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

    // ===============================

    return(
    <div>
        <h2>
        <div className="title">Ingredient List:</div>
            {/*<p>Different checklist items/p> */}
        </h2>

        <br></br>

        
        <div className="list-container">
        {checkList.map((item, index) => (
            <input key={index} type="checkbox" label={item}/>
        ))}
        </div>
        
        <br></br>

        <h3>
            <div>
            {`Already obtained: ${checkedItems}`}
            </div>
        </h3>

        <form action="/action_page.php">
            
        </form>
    </div>
    );
}

export default Check;
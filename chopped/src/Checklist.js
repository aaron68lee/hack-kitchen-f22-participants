//import React, {useState} from "react";
import React from "react";

function check()
{
    const checkList = ["Flour", "Eggs", "Butter"];
    //const [checked, setChecked] = useState([]);

    /*const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };*/

    return(
    <div>
        <div className="title">Your CheckList:</div>
            {/*<p>Different checklist items/p> */}

        <form action="/action_page.php">
            
        </form>
    </div>
    );
}

export default check;
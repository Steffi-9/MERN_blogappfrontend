import { useState } from "react"


const MyForm = (value)=>{
    const [val,setValue] = useState(value)
    return[val,(event)=>{
        setValue({
            //spread Syntax ...val
            ...val,[event.target.name]:event.target.value
        })

    }

    ]

}

export default MyForm
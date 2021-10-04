// I need to make use ofReact props and components
import React from 'react'
import BootsrapReact from '../bootstrapReact'
import TextForm from '../components/TextForms'

//Component

export default function App (){
    return(
        <div>
        <BootsrapReact title="Techmasters " />
        <TextForm heading = "Enter the text to Analyze" email ="Email-address" />
        </div>
    )
}

import React from 'react'

export default function Alert(props) {
    const Capatilize=(word)=>{
        const str= word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.color} alert-dismissible fade show m-2`} role="alert">
            <strong>
            {Capatilize(props.alert.type)}
            </strong> :{props.alert.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

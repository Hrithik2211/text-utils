import React from 'react'

function alert(props) {
    const capitalize=(word)=>{
        const first = word.charAt(0).toUpperCase();
        return first+word.slice(1);
}
  return (      
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    )     
}

export default alert        
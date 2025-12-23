
const SM_Spacer = () => {
    return (
      <div className="spacer-small my-1" style={{height: '1em'}}/>
    )
  }
  
const MD_Spacer = () => {
    return (
        <div className="spacer-medium my-2" style={{height: '2em'}}/>
    )
}

const LG_Spacer = () => {
    return (
        <div className="spacer-large my-2" style={{height: '3em'}}/>
    )
}

const XL_Spacer = () => {
    return (
        <div className="spacer-xl my-3" style={{height: '4em'}}/>
    )
}


const Inline_Spacer = () => {
    return (
        <><span style={{marginLeft: '0.5em'}}>&nbsp;</span>|<span style={{marginRight: '0.5em'}}>&nbsp;</span></>
    )
}



export { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer, Inline_Spacer }
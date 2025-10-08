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

const Goodreads_Button = () => {
    return (
        <><button className="button-goodreads">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Goodreads_%27g%27_logo.svg/1024px-Goodreads_%27g%27_logo.svg.png?20220601041842"/> &nbsp; add to goodreads
        </button>
        </>
    )
}

export { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer, Inline_Spacer, Goodreads_Button }
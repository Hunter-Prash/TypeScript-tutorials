type ContainerProps={
    styles:React.CSSProperties
}


export const Container=(props:ContainerProps)=>{
    return (
        <div style={props.styles}>
            <h2>Text goes here</h2>
        </div>
    )
}

type ContainerProps = {
    styles: React.CSSProperties
}

export const StyleProps = (props: ContainerProps) =>{
    return <div style={props.styles}>Text Content goes here</div>
}
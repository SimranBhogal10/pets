type ContainerProps = {
    children: React.ReactNode
}

const Container : React.FC<ContainerProps> = ({children}) => {
    return (
        <div className="max-w-[1440px] mx-auto xl:px-10 md:px-2 px-6">
            {children}
        </div>
    )
}

export default Container;
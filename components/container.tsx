import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="md:px-20  px-3 mt-10">
            {children}
        </div>
    )
}

export default Container
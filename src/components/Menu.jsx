import CommonHead from '@/commons/CommonHead'
import CommonMenuCard from '@/commons/CommonMenuCard'
import React from 'react'

const Menu = () => {
    return (
        <>
            <section className='menuSection'>
                <div className="container">
                    <div className="manuSectionHead">
                        <CommonHead headName={"Enjoy a new blend of coffee style"} />
                        <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
                    </div>
                    <div className="menuRow">
                        <CommonMenuCard menuImages={"/images/Cuppuccino.png"} menuName={"Cappuccino"} menuPrice={8.50}/>
                        <CommonMenuCard menuImages={"/images/Chai Latte.png"} menuName={"Chai Latte"} menuPrice={19.99}/>
                        <CommonMenuCard menuImages={"/images/Macchiato.png"} menuName={"Macchiato"} menuPrice={10.29}/>
                        <CommonMenuCard menuImages={"/images/Expresso.png"} menuName={"Macchiato"} menuPrice={24.99}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu
import React , {Fragment} from 'react'
import '../../Assets/bootstrap/bootstrap.min.css'
import laystyle from './Layout.module.css'
import Content from './Content/Content'


const Layout = () => {
    return (
        <Fragment>
            {/* <SecondHeader></SecondHeader>
           {pathname === "/" ? <Header /> : null}  */}
            <Content>

                {/* {props.children} */}


            </Content>

            {/* <Footer></Footer> */}
        </Fragment>


    )
}

export default Layout

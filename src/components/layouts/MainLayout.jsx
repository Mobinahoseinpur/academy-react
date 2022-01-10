import React,{Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../SecondHeader'
import Content from '../content/content'
import Footer from '../Footer'
import SecondHeader from '../SecondHeader';

const MainLayout = (props) => {
    const { pathname } = props.location;
    return ( 
        <Fragment>
            <SecondHeader></SecondHeader>
            {pathname=== "/" ? <Header/> : null}
            <Content>

                {props.children}


            </Content>
                <Footer></Footer>
        </Fragment>
     );
}
 
export default withRouter(MainLayout);
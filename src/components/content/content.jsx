import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../components/content/content.module.css';

const Content = (props) => {
    return ( 
        <React.Fragment>
            <div className={`${styles.content_} container row container-fluid main_container`}>
                <p>{props.children}</p> 
            </div>
            
        </React.Fragment>
     );
}
 
export default Content;
 

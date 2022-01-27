import React from 'react';
import './Title.css';
import {
    useLocation
} from 'react-router-dom';
import Header from "../Header";
const Title = ()=>{
    return(
        <div>
            <div className="row nav-container">
                <div className="container">
                    <div className="look">
                        <span className="H">H</span>
                        <span className="e">H</span>
                        <span className="l">e</span>
                        <span className="l">l</span>
                        <span className="o1">
  		                    <div className="eye1">
  			                <div className="eyeball-1"/></div></span>
                            <span className="o2"><div className="eye2">
                                <div className="eyeball-2"/></div></span>
                            <span className="k">L</span>
                            <span className="k">A</span>
                            <span className="k">D</span>
                            <span className="k">S</span>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default Title;

import React, { Component } from 'react';
import './styles.css';
import FooterList from '../footer-list'
import { VisibilityFilters } from "../../modules/app/actions";


class Footer extends Component {
    render() {
        const {count} = this.props;
        return (
            <footer>   
                <div className="footer">
                    <span className="todo-count"><strong>{count}</strong> items left</span>
                    <ul className="todo-state">
                        <FooterList filter={VisibilityFilters.SHOW_ALL} className="">All</FooterList>
                        <FooterList filter={VisibilityFilters.SHOW_ACTIVE}>Active</FooterList>
                        <FooterList filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FooterList>
                    </ul>
                </div>
            </footer>   
        )
    }   
}

export default Footer;

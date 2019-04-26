import React, { Component } from "react";
import { connect } from "react-redux";
import { removeNote } from "../actions/index";

import "../styles/index.css";

function mapDispatchToProps(dispatch) {
    return {
        removeNote: title => dispatch(removeNote(title))
    };
}

class ConnectedList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sample: ""
        };
    }

    handleClick(el) {
        let title = el.title;
        let id = el.id;
        this.props.removeNote({ title, id});
    }

    componentDidUpdate() {
        console.log(true);
    }

    render() {
        if (this.props.notes.length === 0) {
            return (
                <div className="list-group list-group-flush">
                    No notes to display
                </div>
            );
        }
        return (    
            <ul className="list-group list-group-flush">
                {
                    this.props.notes.map(el => (
                        <li className="list-group-item notes-display" key={el.id}>
                            {el.title}    
                            <button type="submit" className="add-note-button" onClick={() => this.handleClick(el)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        );      
    }
}

const mapStateToProps = state => {
    return { notes: state.notes };
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;

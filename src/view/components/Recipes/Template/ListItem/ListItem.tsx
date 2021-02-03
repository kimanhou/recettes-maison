import React from 'react';
import './ListItem.scss';

interface IListItemProps {
    text : string;
    dotColor ?: string
}

const ListItem : React.FC<IListItemProps> = props => {
    return (
        <div className={`list-item`}>
            <div className={`list-item-dot`}>
                <div className={`list-item-dot-filling`} style={{ backgroundColor: props.dotColor}}></div>
            </div>
            {props.text}
        </div>
    );
}

export default ListItem;
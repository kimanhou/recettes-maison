import React from 'react';
import './ListItem.scss';

interface IListItemProps {
    text : string;
    dotColor ?: string;
    active ?: boolean;
    activeDelay ?: string;
}

const ListItem : React.FC<IListItemProps> = props => {
    const activeClassname = props.active ? 'active' : '';
    
    return (
        <div className={`list-item`}>
            <div className={`list-item-dot`}>
                <div className={`list-item-dot-filling ${activeClassname}`} style={{ backgroundColor: props.dotColor, animationDelay: props.activeDelay }}></div>
            </div>
            {props.text}
        </div>
    );
}

export default ListItem;
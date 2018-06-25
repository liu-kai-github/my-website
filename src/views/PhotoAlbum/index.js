import React from 'react';


import Horizontal from './Horizontal';
import Vertical from './Vertical';

class PhotoAlbum extends React.Component {

    render() {
        return (<div>
            <Horizontal/>
            <Vertical/>
        </div>);
    }

}

export default PhotoAlbum;

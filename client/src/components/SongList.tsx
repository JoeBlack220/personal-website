import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { selectSong } from '../actions';
// by convention, we call it this name
// what is returned here is the props that gives to this component
const mapStateToProps = (state: any) => {
    console.log(state);
    return state;
}
// how we handle redux props
const connector = connect(mapStateToProps, { selectSong });
type PropsFromRedux = ConnectedProps<typeof connector>
class SongList extends Component<PropsFromRedux> {
    renderList() {
        return this.props.songs.map((song: any) => {
            return (
                <div className='item' key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                </div>
            )
        })
    }
    render() {
        return <div>{this.renderList()}</div>
    }
}

export default connector(SongList);
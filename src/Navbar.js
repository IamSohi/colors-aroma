import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'
import { IconButton, MenuItem, Select, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex", open: false };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);

    }
    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true })
        this.props.handleChange(e.target.value)
    }

    closeSnackbar() {
        this.setState({ open: false })
    }
    render() {
        const { level, changeLevel } = this.props;
        const { format, open } = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <Link to="/">
                        reactcolorpicker
                    </Link>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>

                    <div className="slider">
                        <Slider defaultValue={level}
                            min={100} max={900} step={100}
                            onAfterChange={changeLevel} />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGB - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }} open={open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed TO {format.toUpperCase}</span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={this.Snackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color='inherit'
                            key="close"
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

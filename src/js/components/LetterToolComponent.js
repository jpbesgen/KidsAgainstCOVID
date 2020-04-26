import React from "react";
import classnames from "classnames";

import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Button,
    Spinner
} from "reactstrap";

import Canvas from "./CanvasComponent";

import db from "../stores/DBStore.js";

export default class LetterToolComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isWriting: false,
            isDrawing: false,
            activeTab: '1',
            previewing: false,
            uploading: false,
        };

        this.uploadLetter = this.uploadLetter.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    toggleTab(t) {
        this.setState({
            activeTab: t
        });
    }
    
    togglePreview() {
        let { previewing } = this.state;
        this.setState({
            previewing: !previewing
        });
    }

    uploadLetter() {
        this.setState({
            uploading: true,
        });

        // create blob
        let canvas = document.getElementById("letter-canvas");

        canvas.toBlob((blob) => {
            let metadata = {
                contentType: "image/jpeg"
            };
            db.uploadLetter(blob, metadata).then(() => {
                this.uploadSuccess()
            }).catch((error) => {
                console.log(error);
                this.uploadError();
            });
        });
    }

    uploadSuccess() {
        this.setState({
            uploading: false,
            previewing: false,
        });
    }

    uploadError() {
        this.setState({
            uploading: false,
            previewing: false,
        });
    }

    render() {
        let { activeTab, previewing, uploading } = this.state;

        return (
            <div style={styles.container}>
                {/* */}
                <Nav style={styles.nav}
                    className={classnames("flex-column", "nav-pills")} tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { this.toggleTab('1'); }}
                        >
                            Writing
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { this.toggleTab('2'); }}
                        >
                            Drawing
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { this.toggleTab('3'); }}
                        >
                            Backgrounds
                        </NavLink>
                    </NavItem>
                </Nav>

                <div style={styles.contentContainer}>
                    <div style={previewing ? styles.configBarHidden : styles.configBar}>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                            Writing Config

                            <input type="checkbox"/>
                            </TabPane>
                            <TabPane tabId="2">
                            Drawing
                            </TabPane>
                            <TabPane tabId="3">
                            Backgrounds
                            </TabPane>
                        </TabContent>
                    </div>
                    <div style={styles.canvasContainer}>
                        <Canvas currentTab={activeTab} disabled={uploading} id="letter-canvas"/>
                    </div>

                    {previewing ? 
                        <Button
                            onClick={this.uploadLetter}
                            color="success"
                            disabled={uploading}
                        >
                            {uploading ? <Spinner color="light"/> : "Upload Letter!"}
                        </Button>
                        :
                        ""
                    }

                    <Button 
                        style={styles.previewButton} 
                        color="info"
                        onClick={() => this.togglePreview()}
                    >
                            {previewing ? "Continue Editing!" : "Preview Letter"}
                    </Button>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        width: "90vw",
        height: "98vh",
        display: "flex",
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    nav: {
        flex: "2",
        height: "100%",
        backgroundColor: "#000038",
        color: "white"
    },
    contentContainer: {
        flex: "8",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    configBar: {
        flex: "2",
        width: "100%",
        backgroundColor: "#000038",
        color: "white",
    },
    configBarHidden: {
        flex: "2",
        width: "100%",
        backgroundColor: "#000038",
        color: "white",
        display: "none"
    },
    canvasContainer: {
        flex: "8",
        width: "100%",
        padding: "1%"
    },
    previewButton: {
        position: "absolute",
        right: "0%",
        bottom: "1%"
    }
};
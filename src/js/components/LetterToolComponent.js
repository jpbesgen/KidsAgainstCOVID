import React from "react";
import classnames from "classnames";

import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Button,
    Spinner,
    Input
} from "reactstrap";

import FillInCanvas from "./FillInCanvasComponent";
import BackgroundCanvas from "./BackgroundCanvasComponent";
import DrawingCanvas from "./DrawingCanvasComponent";
import WritingCanvas from "./WritingCanvasComponent";
import PreviewCanvas from "./PreviewCanvasComponent";

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
            writing: {},
            canvases: {}
        };

        this.uploadLetter = this.uploadLetter.bind(this);
        this.updateWriting = this.updateWriting.bind(this);
        this.addCanvas = this.addCanvas.bind(this);
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

    updateWriting(section, e) {
        let { writing } = this.state;
        writing[section] = e.target.value;
        this.setState({
            writing,
        });
    }

    addCanvas(id) {
        let { canvases } = this.state;
        if(!canvases.includes(id)) canvases.push(id)
        this.setState({
            canvases
        });
    }

    render() {
        let { activeTab, previewing, uploading, writing, canvases } = this.state;

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
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { this.toggleTab('4'); }}
                        >
                            Fill-In
                        </NavLink>
                    </NavItem>
                </Nav>

                <div style={styles.contentContainer}>
                    <div style={styles.canvasContainer}>
                        <FillInCanvas 
                            addCanvas = {this.addCanvas}
                            hidden={activeTab != "4"} 
                            disable={uploading} 
                            id="fill-in-canvas"/>
                        <BackgroundCanvas 
                            addCanvas = {this.addCanvas}
                            hidden={activeTab != "3"} 
                            disable={uploading} 
                            id="background-canvas"/> 
                        <DrawingCanvas 
                            addCanvas = {this.addCanvas}
                            hidden={activeTab != "2"} 
                            disable={uploading} 
                            id="drawing-canvas"/>
                        <WritingCanvas
                            addCanvas = {this.addCanvas}
                            hidden={activeTab != "1"}
                            writing={writing}
                            font={{color:"red",size:"12",family:"Helvetica"}}
                            disabled={uploading} 
                            id="writing-canvas"
                        />
                        <PreviewCanvas
                            canvases={canvases}
                            hidden={!previewing}
                            disabled={uploading} 
                        />
                        
                    </div>
                        <TabContent style={previewing ? styles.configBarHidden : styles.configBar} activeTab={activeTab}>
                            <TabPane style={styles.configTab} tabId="1">
                                <div style={styles.writingContainer}>
                                    <label>Add a greeting.</label>
                                    <Input 
                                        name="header" 
                                        type="text" 
                                        placeholder="ex: Dear Heroes,"
                                        onInput={(e) => this.updateWriting("greeting", e)}
                                    />

                                    <label>Add a body.</label>
                                    <textarea 
                                        style={styles.bodyInput} 
                                        rows="15" 
                                        placeholder="Tell"
                                        onInput={(e) => this.updateWriting("body", e)}
                                    ></textarea>

                                    <label>Add a closing.</label>
                                    <textarea 
                                        style={styles.closingInput} 
                                        rows="2"
                                        onInput={(e) => this.updateWriting("closing", e)}
                                    ></textarea>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                            Drawing
                            </TabPane>
                            <TabPane tabId="3">
                            Backgrounds
                            </TabPane>
                            <TabPane tabId="4">
                            
                            
                            </TabPane>
                        </TabContent>


                    {previewing ? 
                        <Button
                            onClick={this.uploadLetter}
                            color="success"
                            disabled={uploading}
                            style={styles.uploadButton}
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
        height: "85vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    nav: {
        flex: "1",
        height: "100%",
        backgroundColor: "white",
        color: "#000038"
    },
    contentContainer: {
        flex: "8",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        position: "relative",
    },
    configBar: {
        flex: "2",
        height: "100%",
        backgroundColor: "white",
        color: "#000038",
        padding: "1%",
    },
    configBarHidden: {
        display: "none"
    },
    canvasContainer: {
        flex: "2",
        width: "100%",
        padding: "1%"
    },
    previewButton: {
        position: "absolute",
        right: "1%",
        bottom: "5%"
    },
    uploadButton: {
        position: "absolute",
        right: "23%",
        bottom: "5%"
    },
    configTab: {
        width: "100%",
        height: "100%"
    },
    writingContainer: {
        width: "100%",
        height: "80%",
        overflowY: "scroll",
        overflowX: "hidden",
    },
    bodyInput: {
        border: "1px solid rgba(200, 200, 200, 1)",
        borderRadius: "5px",
        width: "100%",
        height: "50%"
    },
    closingInput: {
        border: "1px solid rgba(200, 200, 200, 1)",
        borderRadius: "5px",
        width: "100%",
    }
};
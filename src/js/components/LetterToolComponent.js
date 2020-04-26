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

import {
    SwatchesPicker as Swatches,
    CirclePicker as Circles
} from "react-color";

import BackgroundCanvas from "./BackgroundCanvasComponent";
import DrawingCanvas from "./DrawingCanvasComponent";
import WritingCanvas from "./WritingCanvasComponent";
import PreviewCanvas from "./PreviewCanvasComponent";

import LetterForHospital from "./LetterForHospitalComponent";

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
            writing: {greeting:"",body:"",closing:"",name:""},
            font: {color:"red",size:"12",family:"Monospace"},
            canvases: [],
            background: {
                color: "#fff"
            },
            drawing: {
                color: "#000",
                size: 12,
            },
            continuing: false,
        };

        this.uploadLetter = this.uploadLetter.bind(this);
        this.continueLetter = this.continueLetter.bind(this);
        this.updateWriting = this.updateWriting.bind(this);
        this.addCanvas = this.addCanvas.bind(this);
        this.updateBackground = this.updateBackground.bind(this);
        this.updateDrawingColor = this.updateDrawingColor.bind(this);
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
            previewing: !previewing,
            continuing: false,
        });
    }

    uploadLetter() {
        this.setState({
            uploading: true,
        });

        // create blob
        let canvas = document.getElementById("preview-canvas");

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

    continueLetter() {
        this.setState({
            continuing: true,
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
        console.log(id);
        if(!canvases.includes(id)) canvases.push(id)
        this.setState({
            canvases
        });
    }

    updateCanvas(id) {
        console.log("updating " + id);
    }

    updateBackground(color, event) {
        this.setState({
            background: { color: color.hex }
        });
    }

    updateFontColor(color, event) {
        let { font } = this.state;
        font.color = color.hex;
        this.setState({
            font,
        });
    }

    updateDrawingColor(color, event) {
        let { drawing } = this.state;
        drawing.color = color.hex;
        this.setState({
            drawing,
        });
    }

    render() {
        let { activeTab, previewing, uploading, writing, canvases, background, font, drawing, continuing } = this.state;

        return (
            <div style={styles.biggerContainer}>
                <div style={styles.writingContainer}>
                    <label><b>Send a local healthcare provider or essential worker a kind note and picture through email. Please fill out the information below, with parent's permission (if under 18).</b></label>
                    <label>First Name</label>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Add your name here"
                        onInput={(e) => this.updateWriting("name", e)}
                    />
                    <label>Email (Optional)</label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        onInput={(e) => this.updateWriting("email", e)}
                    />
                    <br/>
                    <label><b>Now add a note and a drawing!</b></label>
                    <br/>
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
                        placeholder="Tell your recipient about how much you appreciate them!"
                        onInput={(e) => this.updateWriting("body", e)}
                    ></textarea>

                    <label>Add a closing.</label>
                    <Input
                        name="closing"
                        type="text"
                        placeholder="ex: Sincerely,"
                        onInput={(e) => this.updateWriting("closing", e)}
                    />
                </div>
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
                        <div style={styles.canvasContainer}>
                            <BackgroundCanvas 
                                addCanvas = {this.addCanvas}
                                background={background}
                                hidden={activeTab != "3" || previewing} 
                                invisible={false}
                                disable={uploading} 
                                id="background-canvas"/> 
                            <DrawingCanvas 
                                addCanvas = {this.addCanvas}
                                drawing={drawing}
                                invisible = {false}
                                hidden={activeTab != "2" || previewing}
                                disable={uploading || activeTab != "2"} 
                                id="drawing-canvas"/>
                            <WritingCanvas
                                addCanvas = {this.addCanvas}
                                hidden={activeTab != "1" || previewing}
                                invisible={true}
                                writing={writing}
                                font={font}
                                disabled={uploading} 
                                id="writing-canvas"
                            />
                            <PreviewCanvas
                                canvases={canvases}
                                hidden={false}
                                invisible={false}
                                disabled={uploading} 
                                id="preview-canvas"
                            />
                            
                        </div>
                            <TabContent style={previewing ? styles.configBarHidden : styles.configBar} activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <label>Text Color</label>
                                    <Circles
                                        onChange={(color, event) => this.updateFontColor(color, event)}
                                    />
                                </TabPane>
                                <TabPane tabId="2">
                                    <label>Pen Color</label>
                                    <Circles
                                        onChange={(color, event) => this.updateDrawingColor(color, event)}
                                    />
                                    <label>Pen Size</label>
                                    
                                </TabPane>
                                <TabPane tabId="3">
                                    <label>Background Color</label>
                                    <Circles
                                        onChange={(color, event) => this.updateBackground(color, event)}
                                    />
                                </TabPane>
                            </TabContent>


                        {previewing ? 
                            <Button
                                onClick={this.continueLetter}
                                color="success"
                                disabled={uploading}
                                style={styles.uploadButton}
                            >
                                Continue
                            </Button>
                            :
                            ""
                        }

                        <Button 
                            style={styles.previewButton} 
                            color="info"
                            onClick={() => this.togglePreview()}
                        >
                                {previewing ? "Back to Edit" : "Preview Letter"}
                        </Button>

                    </div>
                </div>

                {continuing ? 
                    <div style={styles.hospitalComponent}>
                        
                        <LetterForHospital
                            uploadLetter = {this.uploadLetter}
                        />
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}

const styles = {
    hospitalComponent: {
        height: "110vh",
        width: "90vw",
    },
    biggerContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        width: "95vw",
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
        color: "#000038",
        padding: "1%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    configBarHidden: {
        display: "none"
    },
    canvasContainer: {
        flex: "3",
        width: "100%",
        height: "100%",
        padding: "1%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        width: "70%",
        padding: "5%",
        overflowY: "scroll",
        overflowX: "hidden",
        color: "#000038"
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
import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import "../assets/style/footers.scss";

const { Footer } = Layout;

const Footers = () => {
    return (
        <Fragment>
            <Layout className="layout">
                <Footer>
                    <div className="con-inside">
                        <ul>
                            <li>
                                <div className="logo">
                                    <div className="box-pink">
                                        <svg height="50" width="75">
                                            <polygon points="30,5 50,25 30,45"
                                                style={{
                                                    fill: "white", stroke: "black", strokeWidth: "1"
                                                }}
                                            />
                                        </svg>
                                    </div>
                                    <h2>Milan Tv</h2>
                                </div>
                                <p>This project is a project about uploading and</p>
                                <p>reading video or movie files. It might not be perfect yet</p>
                                <p>but we will develop it to keep abreast</p>
                                <p>of technological developments</p>
                            </li>
                            <li>
                                <div className="goto">
                                    <p>Tentang Kami</p>
                                    <p>Blog</p>
                                    <p>Layanan</p>
                                    <p>Karir</p>
                                    <p>Pusat Media</p>
                                    {/* <Link to="/">Blog</Link>
                                <Link to="/">Layanan</Link>
                                <Link to="/">Karir</Link>
                                <Link to="/">Pusat Media</Link> */}
                                </div>

                            </li>
                            <li>
                                <div className="find-us">
                                    <h2>Download</h2>
                                    <ul className="support-logo">
                                        <li><img src={require("../assets/image/playstore.png")} alt="" /></li>
                                        <li><img src={require("../assets/image/appstore.png")} alt="" /></li>
                                    </ul>
                                    <h2>Social Media</h2>
                                    <ul className="clien-logo">
                                        <li><img src={require("../assets/image/fb.png")} alt="" /></li>
                                        <li><img src={require("../assets/image/pinterest.jpg")} alt="" /></li>
                                        <li><img src={require("../assets/image/igg.jpg")} alt="" /></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <div className="feet">
                            <h3>Copyright @ 2000-202 Milan TV. All Rights Reserved</h3>
                        </div>
                    </div>
                </Footer>
            </Layout>
        </Fragment>
    )
}

export default Footers;



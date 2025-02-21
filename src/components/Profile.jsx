import React from "react";  
import manhole from "../assets/products/manhole-cover.png";
import grate from "../assets/products/grate.png";
import surbox from "../assets/products/surface-box.png";
import metbox from "../assets/products/meter-box.png";
import tecplate from "../assets/products/tactile.png";
import flange from "../assets/products/flange.png";
import counweight from "../assets/products/counter-weight.png";
import uh from "../assets/products/upper-housing.png";
import lh from "../assets/products/lower-housing.png";
import owb from "../assets/products/open-well-bracket.png";
import owmb from "../assets/products/open-well-motor-body.png";
import motorbase from "../assets/products/motor-base.png";
import owbase from "../assets/products/open-well-base.png";
import mb from "../assets/products/motor-body.png";
import cpa from "../assets/products/column-pipe-adapter.png";
import connection from "../assets/products/connection.png";
import diskbrake from "../assets/products/disk-brake.png";
import impeller from "../assets/products/impeller.png";
import sleeve from "../assets/products/sleeves.png";
import pulley from "../assets/products/pulley.png";

export default function Profile() {
    return (
            <div>
                <section className="main">
                    <p>The Company is engaged in producing a wide range of product profile</p>
                    <h2>Product Profile</h2>
                </section>
                <section className="prod">
                    <div className="category">
                        <h3>Sanitary Casting</h3>
                        <div className="cards">
                            <div className="ticket">
                                <p>Manhole Covers</p>
                                <img src={manhole} alt="Manhole Cover" />
                            </div>
                            <div className="ticket">
                                <p>Grates</p>
                                <img src={grate} alt="Grate" />
                            </div>
                            <div className="ticket">
                                <p>Surface Boxes</p>
                                <img src={surbox} alt="Surface Box" />
                            </div>
                            <div className="ticket">
                                <p>Meter Boxes</p>
                                <img src={metbox} alt="Meter Box" />
                            </div>
                            <div className="ticket">
                                <p>Tectile Plate</p>
                                <img src={tecplate} alt="Tectile Plate" />
                            </div>
                        </div>
                    </div>
                    <div className="category">
                        <h3>Industrial Casting</h3>
                        <div className="cards">
                            <div className="ticket">
                                <p>Flanges</p>
                                <img src={flange} alt="Flange" />
                            </div>
                            <div className="ticket">
                                <p>Counterweights</p>
                                <img src={counweight} alt="Counterweight" />
                            </div>
                        </div>
                    </div>
                    <div className="category">
                        <h3>Pump and Valve casting</h3>
                        <div className="cards">
                            <div className="ticket">
                                <p>Motor Upper Housing</p>
                                <img src={uh} alt="Motor Upper Housing" />
                            </div>
                            <div className="ticket">
                                <p>Motor Lower Housing</p>
                                <img src={lh} alt="Motor Lower Housing" />
                            </div>
                            <div className="ticket">
                                <p>Valve</p>
                                <img src="" alt="" />
                            </div>
                            <div className="ticket">
                                <p>Open Well Bracket</p>
                                <img src={owb} alt="Open Well Bracket" />
                            </div>
                            <div className="ticket">
                                <p>Open Well Motor Body</p>
                                <img src={owmb} alt="Open Well Motor Body" />
                            </div>
                            <div className="ticket">
                                <p>Motor Base</p>
                                <img src={motorbase} alt="Motor Base" />
                            </div>
                            <div className="ticket">
                                <p>Motor Body</p>
                                <img src={mb} alt="Motor Body" />
                            </div>
                            <div className="ticket">
                                <p>NRV</p>
                                <img src="" alt="" />
                            </div>
                            <div className="ticket">
                                <p>Suction</p>
                                <img src="" alt="" />
                            </div>
                            <div className="ticket">
                                <p>Open Well Base</p>
                                <img src={owbase} alt="Open Well Base" />
                            </div>
                            <div className="ticket">
                                <p>End Shield Castings</p>
                                <img src="" alt="" />
                            </div>
                            <div className="ticket">
                                <p>Column Pipe Adapter</p>
                                <img src={cpa} alt="Column Pipe Adapter" />
                            </div>
                            <div className="ticket">
                                <p>Connection Piece</p>
                                <img src={connection} alt="Connection Piece" />
                            </div>
                            <div className="ticket">
                                <p>Volute Casting</p>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="category">
                        <h3>Automotive Castings</h3>
                        <div className="cards">
                            <div className="ticket">
                                <p>Disk Brake</p>
                                <img src={diskbrake} alt="Disk Brake" />
                            </div>
                    <div className="ticket">
                        <p>Brake Drum</p>
                        <img src="../assets/products/brake-drum.png" alt="Brake Drum" />
                    </div>
                </div>
                    </div>
                    <div className="category">
                        <h3>Other Castings</h3>
                        <div className="cards">
                            <div className="ticket">
                                <p>Impeller</p>
                                <img src={impeller} alt="Impeller" />
                            </div>
                            <div className="ticket">
                                <p>Sleeve</p>
                                <img src={sleeve} alt="Sleeve" />
                            </div>
                            <div className="ticket">
                                <p>Pulley</p>
                                <img src={pulley} alt="Pulley" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    );
}
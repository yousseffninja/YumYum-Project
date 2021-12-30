import React from "react";
import './footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index"
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faWhatsapp, faTwitter, faSnapchat} 
    from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Branches</h4>
                        <ul className="list-unstyled">
                            <li>Down Town - Cairo</li>
                            <li>Fifth settlement - Cairo</li>
                            <li>Haram - Giza</li>
                            <li>Sheikh Zayed City - Giza</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Contact</h4>
                        <ul className="list-unstyled">
                            <li><FontAwesomeIcon icon={faEnvelope}/> Email</li>
                            <li><FontAwesomeIcon icon={faWhatsapp}/> : 01552327922</li>
                            <li><FontAwesomeIcon icon={faMobile}/> 01239560221 - 01010955633</li>
                            <li>H: 19777</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Follow</h4>
                        <ul className="list-unstyled">
                            <li><a href="#"><FontAwesomeIcon icon={faFacebook}/></a> : YumYum Restaurant</li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram}/></a> : @yum_yum</li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter}/></a> : @yumyum_rest</li>
                            <li><a href="#"><FontAwesomeIcon icon={faSnapchat}/></a> : @yumyum</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="col-sm">
                        &copy; YumYum | All rigts reserved
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;
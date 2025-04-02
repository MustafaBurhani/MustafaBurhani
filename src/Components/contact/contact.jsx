import GlobalVariables from '../../Common/globalVariables';
import './contact.scss';
export default function Contact() {
    return <section className="contact-section">
        <h2 className="section-heading">Contact</h2>

        <div className="contact-box">
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <div>
                        <div className="option-wrapper">
                            <div className="icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className='data'>
                                <p className="head">Address</p>
                                <p className="desc">{GlobalVariables.fullAddress}</p>
                            </div>
                        </div>

                        <div className="option-wrapper">
                            <div className="icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>

                            <a href={`tel:${GlobalVariables.phone}`}>
                                <div className='data'>
                                    <p className="head">Call</p>
                                    <p className="desc">{GlobalVariables.phone}</p>
                                </div>
                            </a>
                        </div>
                        <div className="option-wrapper">
                            <div className="icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>

                            <a href={`mailto:${GlobalVariables.email}`}>
                                <div className='data'>
                                    <p className="head">Email</p>
                                    <p className="desc">{GlobalVariables.email}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div>
                        <iframe src={GlobalVariables.embededLocation}
                            width={'100%'}
                            height={450}
                            style={{ border: 0 }}
                            loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>

        </div>
    </section>
}
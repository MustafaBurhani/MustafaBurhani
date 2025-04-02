import GlobalVariables from '../../Common/globalVariables';
import './resume.scss';

export default function Resume() {
    return <section className="resume-section">
        <h2 className="section-heading">
            Resume
        </h2>
        <p>
            {GlobalVariables.resumeTagline}
        </p>

        <div className="row">
            <div className="col-12 col-md-6">
                <h4>Summary</h4>
                <div className="resume-main-wrapper resume-custom-bullet mb-5">
                    <p className="reume-desciption">
                        {GlobalVariables.resumeSummary}
                    </p>

                    <ul className="resume-bullet-points">
                        <li><p>
                            {GlobalVariables.resumeAdress}
                        </p></li>
                        <li><p>
                            {GlobalVariables.phone}
                        </p></li>
                        <li><p>
                            {GlobalVariables.email}
                        </p></li>
                    </ul>
                </div>

                <h4>Education</h4>
                <div className="resume-main-wrapper ">
                    {
                        GlobalVariables.resumeEducation.map((item, index) => {
                            return <div key={index}>
                                <h5 className='resume-custom-bullet mt-4'>{item.name}</h5>
                                <h6 className="year">{item.year}</h6>
                                <p className="reume-desciption">
                                    {item.place}
                                </p>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className="col-12 col-md-6">
                <h4>Professional Experience</h4>
                <div className="resume-main-wrapper">
                    {
                        GlobalVariables.resumeExperience.map((item, index) => {
                            return <div key={index}>
                                <h5 className="resume-custom-bullet mt-4">{item.designation}</h5>
                                <h6 className="year">{item.timePeriod}</h6>
                                <p className="reume-desciption">{item.companyName}</p>

                                <p className="reume-desciption">
                                    {item.shortDesc}
                                </p>
                                <ul className="resume-bullet-points">
                                    {
                                        item.jobPoints.map((points, pointIndex) => {
                                            return <li key={pointIndex}><p>
                                                {points.point}
                                            </p></li>
                                        })
                                    }
                                </ul>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
}
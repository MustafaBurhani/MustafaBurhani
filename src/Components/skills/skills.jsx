import { useState, useEffect } from 'react';
import GlobalVariables from '../../Common/globalVariables';
import './skills.scss';

const sections = ["home", "about", "skills", "resume", "contact"];
export default function Skills() {
    const [reload, setReload] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // function to increase progress bar value by 2
    const onBarClick = (item, index) => {
        var value = item.value < 100 ? item.value + 2 > 100 ? 100 : item.value + 2 : item.value;
        GlobalVariables.skills[index].value = value;
        setReload(true);
    }

    useEffect(() => {
        setReload(false);
    }, [reload]);

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "";

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 300 && rect.bottom >= 100) { // Adjust threshold as needed
                        currentSection = id;
                    }

                }
            });

            if (currentSection == 'skills') {
                setActiveSection('active');
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return <section className={`skills-section ${activeSection}`}>
        <h2 className="section-heading">
            Skills
        </h2>
        <p>
            {GlobalVariables.skillsTagline}
        </p>

        <div className="row progress-row">
            {
                GlobalVariables.skills.map((item, index) => {
                    return <div className="col-12 col-sm-6" key={index}>
                        <div className="progress-wrapper">
                            <div className="head_perc d-flex justify-content-between">
                                <p>{item.name}</p>
                                <p>{item.value}%</p>
                            </div>

                            <div className="progress"
                            // onClick={() => onBarClick(item, index)}
                            >
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={`${item.value}%`}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ "--progress-width": `${item.value}%` }}
                                >
                                </div>
                            </div>
                        </div>

                    </div>
                })
            }
        </div>
    </section>
}
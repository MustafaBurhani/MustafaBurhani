import './About.scss';
import MustafaBurhani from '../../assets/mustafa-ai.webp';
import GlobalVariables from '../../Common/globalVariables';


const ownerBio = [
    { name: "Birthday", value: GlobalVariables.birthday },
    { name: "Age", value: GlobalVariables.age },
    { name: "Website", value: GlobalVariables.website },
    { name: "Degree", value: GlobalVariables.degree },
    { name: "Phone", value: GlobalVariables.phone },
    { name: "Email", value: GlobalVariables.email },
];
export default function About() {
    return <section className="about-section">
        <h2 className="section-heading">About</h2>
        <p>
            {GlobalVariables.aboutDescription}
        </p>


        <div className="row personal-info">
            <div className="col-12 col-md-4">
                <div className="owner-picture">
                    <img src={MustafaBurhani} alt="" className='w-100' loading='lazy' />
                </div>
            </div>

            <div className="col-12 col-md-8">
                <div className="">
                    <h4>{GlobalVariables.ownerDesignation}</h4>
                    <p>{GlobalVariables.ownerTwoLineJobDetail}</p>
                </div>

                <div className="row owner-details">
                    {
                        ownerBio.map((item, index) => {
                            return <div className="col-12 col-sm-6" key={index}>

                                <div key={index}>
                                    <p className="head">{item.name}:</p>
                                    <p className="value">{item.value}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>

    </section>;
}

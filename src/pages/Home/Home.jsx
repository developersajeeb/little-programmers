import './Home.scss';
import group1 from '../../assets/icons/group-logo-1.png'
import group2 from '../../assets/icons/group-logo-2.png'
import group3 from '../../assets/icons/group-logo-3.png'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <main className='home-container'>
            <section className='text-container'>
                <div className='hero-text'>
                    <h1>Team Creation management system</h1>
                    <h2>Existing Team</h2>
                </div>
                <div className='hero-btn'>
                    <button onClick={() => window.team_name_modal.showModal()}>+  Create a team</button>
                </div>
            </section>
            <section className='group-collections grid md:grid-cols-3 lg:grid-cols-4 gap-12'>
                <div className='group-card'>
                    <figure>
                        <img src={group1} alt="" />
                    </figure>
                    <h2>SoftPro</h2>
                    <h3>Innovation tech partner</h3>
                    <p>Grow Your Team with Ease: Effortlessly Add Members for Increased Performance and Achievement</p>
                </div>
                <div className='group-card'>
                    <figure>
                        <img src={group2} alt="" />
                    </figure>
                    <h2>SechZoft</h2>
                    <h3>IT solution expert</h3>
                    <p>Grow Your Team with Ease: Effortlessly Add Members for Increased Performance and Achievement</p>
                </div>
                <div className='group-card'>
                    <figure>
                        <img src={group3} alt="" />
                    </figure>
                    <h2>Nextgen</h2>
                    <h3>Digital generation</h3>
                    <p>Grow Your Team with Ease: Effortlessly Add Members for Increased Performance and Achievement</p>
                </div>
            </section>

            {/* Modal */}
            <dialog id="team_name_modal" className="modal for-transparent">
                <form method="dialog" className="modal-box modal-form">
                    <h3>Create a new team</h3>
                    <label htmlFor="name">Team name</label>
                    <input type="text" name="name" id="name" />
                    <div className='modal-buttons'>
                        <button className='btn-cancel'>Cancel</button>
                        <button onClick={() => window.team_category.showModal()} className='btn-continue'>Continue</button>

                        <dialog id="team_category" className="modal for-transparent">
                            <form method="dialog" className="modal-box modal-form">
                                <h3>Team category</h3>
                                <label htmlFor="name">Team title</label>
                                <input type="text" name="name" id="name" />
                                <div className='modal-buttons'>
                                    <button className='btn-cancel'>Cancel</button>
                                    <Link to='/home/group-dashboard'>
                                        <button className='btn-continue'>Continue</button>
                                    </Link>
                                </div>
                            </form>
                        </dialog>

                    </div>
                </form>
            </dialog>

        </main>
    );
};

export default Home;
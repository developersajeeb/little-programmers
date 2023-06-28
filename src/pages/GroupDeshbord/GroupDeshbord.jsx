import './GroupDeshbord.scss';
import image from '../../assets/others/blank-deshboard.png'
import { Link } from 'react-router-dom';

const GroupDeshbord = () => {
    return (
        <main className='group-container'>
            <section className='text-container'>
                <div className='hero-text'>
                    <h1>Team (Agile3)</h1>
                </div>
                <div className='hero-btn'>
                    <button className='assign-btn'>Assign a group</button>
                    <button onClick={() => window.new_member_modal.showModal()} className='add-member-btn'>Add members</button>
                </div>
            </section>

            <section>
                <div className='members-btn'>
                    <button className='active-btn' disabled>Active members (07)</button>
                    <button className='pending-btn' disabled>Pending (04)</button>
                </div>
            </section>

            <section className='rounded-[14px] border-2 border-[#4C54F8] mt-14'>
                <img className='w-full' src={image} alt="" />
            </section>

            {/* Modal */}
            <dialog id="new_member_modal" className="modal for-transparent">
                <form method="dialog" className="modal-box modal-form">
                    <h3>Assign new member</h3>
                    <label htmlFor="name">Group member can</label>
                    <ul className='modal-list'>
                        <li>1. Identify skills needed.</li>
                        <li>2. Define clear roles.</li>
                        <li>3. Assign a leader.</li>
                        <li>4. Set clear goals.</li>
                    </ul>
                    <div className='modal-buttons'>
                        <button className='btn-cancel'>Cancel</button>
                        <button onClick={() => window.member_info.showModal()} className='btn-continue'>Continue</button>

                        <dialog id="member_info" className="modal for-transparent">
                            <form method="dialog" className="modal-box modal-form second-modal">
                                <h3>Who do you want to add new members?</h3>
                                <label htmlFor="name">Add new member to join group</label>
                                <input type="text" name="name" id="name" />
                                <div className='member-info'>
                                    <figure>
                                        <p>L</p>
                                    </figure>
                                    <div>
                                        <h4>Muhammad Julfikar Ali</h4>
                                        <p>ui.jali@gmail.com</p>
                                    </div>
                                </div>
                                <div className='modal-buttons'>
                                    <button className='btn-cancel'>Cancel</button>
                                    <Link to='/home/group'>
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

export default GroupDeshbord;
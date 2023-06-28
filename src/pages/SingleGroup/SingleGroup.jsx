import { Link } from 'react-router-dom';
import './SingleGroup.scss';
import groupImages from '../../assets/others/group-image.png'
import p1 from '../../assets/members/p1.png'
import p2 from '../../assets/members/p2.png'
import p3 from '../../assets/members/p3.png'
import p4 from '../../assets/members/p4.png'
import p5 from '../../assets/members/p5.png'
import p6 from '../../assets/members/p6.png'
import p7 from '../../assets/members/p7.png'
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { useState } from 'react';

const SingleGroup = () => {
    const activeMembers = [
        {
            image: p4,
            name: 'Muhammad',
            email: 'info@cleaverlearner.com',
            title: 'Team Lead',
            status: 'Active',
            role: 'Admin',
        },
        {
            image: p5,
            name: 'Jubayer',
            email: 'info@jubayer.com',
            title: 'Engineer',
            status: 'Active',
            role: 'Full Stack Developer',
        },
        {
            image: p3,
            name: 'Ab.Rofique',
            email: 'info@arofiq.com',
            title: 'Engineer',
            status: 'Active',
            role: 'Full Stack Developer',
        },
        {
            image: p6,
            name: 'Hassan',
            email: 'info@hasan.com',
            title: 'Developer',
            status: 'Active',
            role: 'Full Stack Developer',
        },
        {
            image: p2,
            name: 'Muhammad Ullah',
            email: 'info@mullah.com',
            title: 'Developer',
            status: 'Active',
            role: 'Full Stack Developer',
        },
        {
            image: p1,
            name: 'Samir',
            email: 'info@samir.com',
            title: 'Developer',
            status: 'Active',
            role: 'Full Stack Developer',
        },
        {
            image: p7,
            name: 'Robiul Alam',
            email: 'info@ralam.com',
            title: 'Developer',
            status: 'Active',
            role: 'Full Stack Developer',
        },
    ]

    const pendingMembers = [
        {
            image: p4,
            name: 'Tahsin',
            email: 'info@cleaverlearner.com',
            title: 'Team Lead',
            status: 'Pending',
            role: 'Engineer',
        },
        {
            image: p5,
            name: 'Aman Uddin',
            email: 'info@jubayer.com',
            title: 'Engineer',
            status: 'Pending',
            role: 'Full Stack Developer',
        },
        {
            image: p3,
            name: 'Zakaria',
            email: 'info@arofiq.com',
            title: 'Engineer',
            status: 'Pending',
            role: 'Full Stack Developer',
        },
        {
            image: p6,
            name: 'Musleh',
            email: 'info@hasan.com',
            title: 'Developer',
            status: 'Pending',
            role: 'Full Stack Developer',
        },
    ]

    const [activeMembersVisible, setActiveMembersVisible] = useState(true);
    const [pendingMembersVisible, setPendingMembersVisible] = useState(false);

    const showActiveMembers = () => {
        setActiveMembersVisible(true);
        setPendingMembersVisible(false);
    };

    const showPendingMembers = () => {
        setActiveMembersVisible(false);
        setPendingMembersVisible(true);
    };

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
                    <button className={`active-btn ${activeMembersVisible ? 'active' : ''}`} onClick={showActiveMembers} disabled={activeMembersVisible == true}>Active members (07)</button>
                    <button className={`pending-btn ${pendingMembersVisible ? 'active' : ''}`} onClick={showPendingMembers} disabled={pendingMembersVisible == true}>Pending (04)</button>
                </div>
                <div className='group-images'>
                    <img src={groupImages} alt="" />
                </div>
            </section>

            {
                activeMembersVisible && <section>
                    <div className='overflow-x-auto mx-auto bg-white md:p-10 p-4 rounded-lg border-2 border-[#4C54F8]'>
                        <table className="min-w-full">
                            <thead>
                                <tr className='text-gray-800 text-left text-lg'>
                                    <th className='p-3 pl-20'>Name</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    activeMembers.length === 0 ?
                                        <tr>
                                            <td className='py-5'>No Data</td>
                                            <td>No Data</td>
                                            <td>No Data</td>
                                            <td>No Data</td>
                                        </tr>
                                        :
                                        activeMembers?.map((user, index) => <tr key={index} className=''>
                                            <td className='flex items-center gap-3 pr-28 pb-4 md:p-4'>
                                                <img src={user.image} alt="" />
                                                <div>
                                                    <h3 className='text-lg font-semibold'>{user.name}</h3>
                                                    <p className='text-sm text-[#20202099]'>{user.email}</p>
                                                </div>
                                            </td>
                                            <td className='text-sm text-[#5a4b4b99] pr-16 pb-4 md:p-0'>{user.title}</td>
                                            <td className='text-sm text-[#20202099] pr-16 pb-4 md:p-0'>{user.status}</td>
                                            <td className='text-sm text-[#20202099] pr-16 pb-4 md:p-0'>{user.role}</td>
                                            <td className='cursor-pointer'><FaAngleDown size={20} /></td>
                                            <td className='cursor-pointer'><FaTimes size={18} /></td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            }

            {
                pendingMembersVisible && <section>
                    <div className='overflow-x-auto mx-auto bg-white md:p-10 p-4 rounded-lg border-2 border-[#4C54F8]'>
                        <table className="min-w-full">
                            <thead>
                                <tr className='text-gray-800 text-left text-lg'>
                                    <th className='p-3 pl-20'>Name</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pendingMembers.length === 0 ?
                                        <tr>
                                            <td className='py-5'>No Data</td>
                                            <td>No Data</td>
                                            <td>No Data</td>
                                            <td>No Data</td>
                                        </tr>
                                        :
                                        pendingMembers?.map((user, index) => <tr key={index} className=''>
                                            <td className='flex items-center gap-3 pr-28 pb-4 md:p-4'>
                                                <img src={user.image} alt="" />
                                                <div>
                                                    <h3 className='text-lg font-semibold'>{user.name}</h3>
                                                    <p className='text-sm text-[#20202099]'>{user.email}</p>
                                                </div>
                                            </td>
                                            <td className='text-sm text-[#5a4b4b99] pr-16 pb-4 md:p-0'>{user.title}</td>
                                            <td className='text-sm text-[#20202099] pr-16 pb-4 md:p-0'>{user.status}</td>
                                            <td className='text-sm text-[#20202099] pr-16 pb-4 md:p-0'>{user.role}</td>
                                            <td className='cursor-pointer'><FaAngleDown size={20} /></td>
                                            <td className='cursor-pointer'><FaTimes size={18} /></td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            }

        

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
                                    <Link to=''>
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

export default SingleGroup;
import './footer.css';
export default function Footer() {
    return (
        <div className="Footer">
            <div><h2>Shortly</h2></div>
            <div className='footer-content'>
                <label>Feature</label>
                <ul>
                    <li>Link shortening</li>
                    <li>Branded Linking</li>
                    <li>Analytics</li>
                </ul>
            </div>

            <div className='footer-content'>
                <label>Resources</label>
                <ul>
                    <li>Blog</li>
                    <li>Developer</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className='footer-content'>
                <label>Company</label>
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Career</li>
                    <li>Contacts</li>
                </ul>

            </div>
        </div>
    )
}
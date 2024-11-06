
const Fotter = () => {
    return (
        <div className="space-y-3 px-4 w-11/12 mx-auto">
            <h1 className="text-4xl font-bold text-center">Gadzet Zone</h1>
            <p className="text-base text-center">Leading the way in cutting-edge technology and innovation.</p>
            <div className="border-t"></div>
            <footer className="flex flex-col gap-3 sm:gap-0 sm:flex-row items-start sm:items-center justify-evenly py-4">
                <div className="space-y-1">
                    <h4 className="text-xl font-semibold">Services</h4>
                    <ul className="text-sm space-y-1">
                        <li>Shipping & Delivary</li>
                        <li>Product Support</li>
                        <li>Order Tracking</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div className="space-y-1">
                    <h4 className="text-xl font-semibold">Company</h4>
                    <ul className="text-sm space-y-1">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="space-y-1">
                    <h4 className="text-xl font-semibold">Legal</h4>
                    <ul className="text-sm space-y-1">
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Loyality</li>
                    </ul>
                </div>
            </footer>
            <p className="text-center">Copyright © 2024 - All right reserved by Gadzet Zone Industries Ltd</p>
        </div>
    );
};

export default Fotter;
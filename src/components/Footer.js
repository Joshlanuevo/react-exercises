const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <div className="bg-mainColor">
            <div className="flex flex-row items-center justify-center">
                <div className="p-10 text-center">
                    <h1>LEARN MORE</h1>
                    <h1>About Us</h1>
                </div>
                <div className="p-10 text-center">
                    <h1>HELP</h1>
                    <h1>FAQ</h1>
                </div>
                <div className="p-10 text-center">
                    <h1>CONNECT</h1>
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className="text-center">
                <small>Copyright &#169; Josh Ivan Lanuevo {currentYear}</small>
            </div>
        </div>
    )
}

export default Footer;

function Footer() {
    return (
        <div id="footerMiddle">
            <div id="footerRight">
                <div id="footerLeft">
                    <footer id="colophon" className="site-footer" role="contentinfo">
                        <div
                            id="top" href="index.html#top"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                            style={{ cursor: 'pointer' }}
                        >Угору</div>
                        <p style={{ textAlign: "center", color: "#733A00", fontSize: "12px" }}>
                            <a style={{ textDecoration: 'none' }}
                                href="mailto:krzheminsky@ukr.net">Будь ласка, використовуйте матеріали з посиланням на
                                авторку ©Кржемінська Тамара Василівна, 2023</a></p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Footer;
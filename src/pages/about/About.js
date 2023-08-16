
function About() {

    return (
        <div id="main">
            <div id="primary" className="site-content">
                <div id="content" role="main">
                    <article className="post">
                        <div className="entry-wrapper">
                            <div className="entry-wrapper-inner">
                                <header className="entry-header">
                                    <h1 className="entry-title">Про матусю</h1>
                                </header>
                                <div className="entry-content">
                                    <img className="wp-image-6 alignright"
                                        src={require('../../images/mama.jpg')}
                                        alt="mama"
                                        width="50%"
                                        sizes="(max-width: 300px) 100vw, 300px" />
                                    <p style={{ color: "#ff5c00", fontSize: "18px" }}>
                                        Свій скромний вірш веселкою прикрашу,<br />
                                        Щоб кожну мить, хвилину нашу<br />
                                        Він осявав, жив поруч з нами,<br />
                                        І римами вітав, словами.
                                    </p>
                                    <p style={{ color: "#bb4400" }}>З глибокою повагою<br />
                                        Т.В.Кржемінська</p>
                                    <p><strong> </strong></p>
                                    <h1 style={{ color: "#000000", paddingLeft: "80px" }}>Я – Тамара<span
                                        style={{ color: "#000000" }}> </span></h1>
                                    <p>Я – Тамара, хоча й не цариця,<br />
                                        Не красуня, проте подивіться:<br />
                                        Маю сірі ясні оченята,<br />
                                        Чорні коси, такі ж бровенята.</p>
                                    <p style={{ paddingLeft: "80px" }}>Життєрадісну маю ще вдачу,<br />
                                        Не жаліюсь ніколи й не плачу,<br />
                                        До чужої біди не байдужа –<br />
                                        Серце чуйне і лагідне дуже.</p>
                                    <p>Схожа я на єврейку, казали,<br />
                                        Ще східнячкою прозивали,<br />
                                        Та коханий казав: «Ти – крульова,<br />
                                        Ти – зірниця моя вечорова».</p>
                                    <p style={{ paddingLeft: "80px" }}>Через те ще, повірте, щаслива,<br />
                                        Що весь світ я сприймаю, як диво,<br />
                                        Що я – частка творіння земного,<br />
                                        Мила мрія Творця неземного.</p>
                                    <p>&nbsp;</p>
                                    <h1 style={{ color: "#000000", paddingLeft: "80px" }}>Я не поэт &#8211; я
                                        просто<span style={{ color: "#000000" }}> </span></h1>
                                    <p>Сегодня у меня спросили.<img
                                        className="alignright size-full wp-image-5792"
                                        src={require('../../images/mama_2.jpg')}
                                        alt="" width="35%"
                                        sizes="(max-width: 700px) 100vw, 700px" /><br />
                                        Какой эпохи я поэт.<br />
                                        О доброте стихи пишу я,<br />
                                        А для таких понятий сроков нет.</p>
                                    <p style={{ paddingLeft: "80px" }}>Все дело в том &#8211; я не поэт, я
                                        просто,<br />
                                        Что вижу, чувствую, стихами выражаю.<br />
                                        Быть может, хорошо, быть может, сносно,<br />
                                        Судите сами, я не возражаю.</p>
                                    <p>Я не Шевченко, не Тычина, не Мовчан &#8211;<br />
                                        Высокими идеями не дышит каждый стих.<br />
                                        Хотя стараюсь брать от них начало &#8211;<br />
                                        Хочу хоть чуточку похожей быть на них.</p>
                                    <p style={{ paddingLeft: "80px" }}>У них черпаю віру в майбуття,<br />
                                        I з них беру я приклад виживати,<br />
                                        I, щоб полегшити життя,<br />
                                        Я буду за нього писати.</p>
                                    <p>Якщо в душі я збуджую любов<br />
                                        До Батьківщини, до природи, до людини,<br />
                                        Тоді я сію і  ідею, і добро,<br />
                                        Щоб в цьому наші погляди були єдині.</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default About;
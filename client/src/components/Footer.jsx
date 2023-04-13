
function Footer() {
    return (
        <div class="text-light py-5" style={{ background: '#343A40' }}>
            <div class="d-lg-flex justify-content-around align-items-center gap-3" >
                <div class="col-lg-5 d-flex flex-column px-4">
                    <p class="nav-link h1 text-light">R-Stadium</p>
                    <p class="ps-3">
                        <b> R-Stadium</b> system vous propose, un ensemble de logiciels de gestion et de contrôle d'accès, un ensemble homogène couvrant l’intégralité de vos besoins pour gérer, contrôler et accroître votre activité.
                    </p>
                    <p class="ps-3">
                        <b> R-Stadium</b> System est présent dans du aires de jeux, mais aussi dans les secteurs du fitness, des piscines, des installations sportives municipales, des tennis, …
                    </p>
                </div>
                <div class="">
                    <ul class="nav">
                        <li class="nav-item"><a class="nav-link text-light" href="#reservation">Reservation</a></li>
                        <li class="nav-item"><a class="nav-link text-light" href="#gallery">Gallery</a></li>
                        <li class="nav-item"><a class="nav-link text-light" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link text-light" href="#Footer">Contact</a></li>
                        <li class="nav-item"><a class="nav-link text-light" href="#connecter">Login</a></li>
                    </ul>
                </div>
                <div class="d-flex flex-column gap-3 text-center">
                    <div>&copy; Copyright 2023 R-Stadium</div>
                    <div class="d-flex text-light justify-content-center gap-2">
                        <a class="bi bi-facebook nav-link text-light h1"></a>
                        <a class="bi bi-twitter nav-link text-light h1"></a>
                        <a class="bi bi-instagram nav-link text-light h1"></a>
                        <a class="bi bi-linkedin nav-link text-light h1"></a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Footer;